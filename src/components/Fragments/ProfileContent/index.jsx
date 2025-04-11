import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "../../../utils/getCroppedImg"; // Sesuaikan path ini dengan helper Anda

// Assets
import MailLogo from "../../../assets/ic_baseline-email.png";
import PasswordLogo from "../../../assets/mdi_password.png";
import VerticalIcon from "../../../assets/vertical-line.png";
import ShowIcon from "../../../assets/show.png";
import HiddenIcon from "../../../assets/hidden.png";
import PersonIcon from "../../../assets/wpf_name.png";
import EditIcon from '../../../assets/EditPen.png';
import Profile from "../../../assets/defaultprofile.png";

import Image from "../../Elements/Image/Index"; // Jika Anda menggunakan komponen Image custom
import { NavLink } from "react-router";

const ProfileContent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "password123"
  });

  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const [profileImage, setProfileImage] = useState(Profile);
  const [croppedImageTemp, setCroppedImageTemp] = useState(null); // Preview sementara

  const onCropComplete = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageSrc(reader.result);
    };
  };

  const showCroppedImage = async () => {
    try {
      const { fileUrl } = await getCroppedImg(imageSrc, croppedAreaPixels);
      setCroppedImageTemp(fileUrl); // Hanya simpan preview sementara
      setImageSrc(null); // Sembunyikan cropper
    } catch (e) {
      console.error(e);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSave = () => {
    if (croppedImageTemp) {
      setProfileImage(croppedImageTemp);
      setCroppedImageTemp(null);
    }

    // Simpan userData ke backend/localStorage bila diperlukan

    setIsEditing(false); // Keluar mode edit
  };

  return (
    <div className="profile-content">
      {/* Profile Image */}
      <div className="profile-image" style={{ position: 'relative', width: 90, margin: '0 auto' }}>
        <label htmlFor="profile-upload" style={{ cursor: isEditing ? 'pointer' : 'default', display: 'block', position: 'relative' }}>
          <img
            src={croppedImageTemp || profileImage}
            width={90}
            alt="Profile"
            style={{ borderRadius: '50%', display: 'block' }}
          />

          {isEditing && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontSize: '12px',
              fontWeight: 'bold',
              pointerEvents: 'none'
            }}>
              Klik untuk ubah
            </div>
          )}
        </label>

        {isEditing && (
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        )}
      </div>

      {/* Cropper */}
      {imageSrc && (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }}>
            <div style={{
            position: 'relative',
            width: 300,
            height: 300,
            backgroundColor: '#fff',
            borderRadius: '8px',
            overflow: 'hidden',
            }}>
            <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
            />
            </div>

            {/* Zoom Slider */}
            <input
            type="range"
            min="1"
            max="3"
            step="0.1"
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
            style={{ marginTop: "10px", width: "300px" }}
            />

            {/* Buttons */}
            <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
            <button onClick={showCroppedImage} style={{
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
            }}>
                Simpan Foto
            </button>

            <button onClick={() => setImageSrc(null)} style={{
                padding: "10px 20px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
            }}>
                Batal
            </button>
            </div>
        </div>
        )}


      {/* Profile Data Form */}
      <div className="profile-data">
        <div className="profile-form">
          <form>
            <div className="form-container">
              <div className="input-box">
                <span className="icon"><Image src={PersonIcon} /></span>
                <span className="icon-v"><Image src={VerticalIcon} /></span>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>

              <div className="input-box">
                <span className="icon"><Image width={17} src={MailLogo} /></span>
                <span className="icon-v"><Image src={VerticalIcon} /></span>
                <input
                  disabled
                  type="email"
                  name="email"
                  value={userData.email}
                  readOnly={!isEditing}
                />
              </div>
              <NavLink to="/forgot-password">Ganti Passowrd?</NavLink>
            </div>
          </form>

          {/* Tombol Edit/Simpan */}
          <div className="profile-button">
            <button onClick={isEditing ? handleSave : () => setIsEditing(true)} className="profile-edit-button">
              <img src={EditIcon} width={15} style={{ marginRight: "5px" }} />
              {isEditing ? "Simpan" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
