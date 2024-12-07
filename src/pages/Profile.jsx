import React, { useState } from 'react'

const Profile = () => {
    const [name, setName] = useState('Vishnu');
    const [phone, setPhone] = useState('+91 123 456 7890');
    const [email, setEmail] = useState('vishnu@example.com');
    const [profilePic, setProfilePic] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        alert('Profile updated successfully!');
        // Here, you can handle saving the updated profile (e.g., sending to an API)
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">Edit Profile</h2>
            
            {/* Profile Picture */}
            <div className="flex justify-center mb-6">
                <div className="relative">
                    <img
                        src={profilePic || 'https://via.placeholder.com/150'}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                    />
                    <label
                        htmlFor="profile-picture"
                        className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-4-4z"></path>
                            <path d="M14 2v6h6"></path>
                        </svg>
                    </label>
                    <input
                        type="file"
                        id="profile-picture"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
            </div>

            {/* Name */}
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter your name"
                />
            </div>

            {/* Phone */}
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter your phone number"
                />
            </div>

            {/* Email */}
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter your email"
                />
            </div>

            {/* Save Button */}
            <div className="flex justify-center">
                <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}

export default Profile
