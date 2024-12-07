import React, { useState } from 'react';
import assets from '../../assets/assets';
import './Profile.css';

const Profile = ({ currentUser, username }) => {
    const [image, setImage] = useState(false);

    return (
        <>
            <h1 className='profile-heading'>PROFILE</h1>
            <div className='profile-container'>
                <div className='profile-card'>
                    <div className='image-con'>
                        <label htmlFor="avatar">
                            <input
                                onChange={(e) => setImage(e.target.files[0])}
                                type="file"
                                id="avatar"
                                accept=".jpg, .png, .jpeg"
                                hidden
                            />
                            <img
                                src={image ? URL.createObjectURL(image) : assets.image_upload}
                                alt="img_icon"
                                className="upload-img"
                            />
                        </label>
                    </div>
                    <div className='profile-details'>
                        <h1 className='profile-username'>{username}</h1>
                        <h3 className='profile-role'>Role: {currentUser}</h3>
                        <p className='profile-email'>Email: {username}@ByteCore.com</p>
                        <p className='profile-department'>Department: IT</p>
                        <p className='profile-contact'>Contact: +1 (234) 567-8901</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
