import React, { useState, useRef, useEffect } from 'react';
import { Camera, Plus, Github, Linkedin, Twitter, MessageCircle, Instagram } from 'lucide-react';


function GraduateCertificate() {
    const [profileData, setProfileData] = useState({
        name: 'Emmanuel Niyonsaba',
        title: 'Software development',
        status: 'Employed',
        photo: null,
        about: "I'm Emmanuel Niyonsaba Junior Developer I have a lot of experience in problem solving and real time collaboration in team.",
        experience: [
            'attended the Gym in 23 July 2024',
            'attended coding camp at tabiya and solve it.',
            'attended coding camp at tabiya and solve it.'
        ],
        tools: ['JavaScript', 'React Js', 'node js', 'Tailwind css and HTML']
    });

    const [qrCode, setQrCode] = useState('');
    const fileInputRef = useRef(null);
    const canvasRef = useRef(null);

    const generateQRCode = (text) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const size = 160;
        const moduleSize = 4;
        const modules = size / moduleSize;
        
        canvas.width = size;
        canvas.height = size;
        
    
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, size, size);
    
        ctx.fillStyle = 'black';

        const hash = text.split('').reduce((a, b) => {
            a = ((a << 5) - a) + b.charCodeAt(0);
            return a & a;
        }, 0);
        
        for (let i = 0; i < modules; i++) {
            for (let j = 0; j < modules; j++) {
                const shouldFill = ((i * j + hash) % 3) === 0;
                if (shouldFill) {
                    ctx.fillRect(i * moduleSize, j * moduleSize, moduleSize, moduleSize);
                }
            }
        }
        
        const cornerSize = moduleSize * 7;
        [[0, 0], [0, size - cornerSize], [size - cornerSize, 0]].forEach(([x, y]) => {
            ctx.fillStyle = 'black';
            ctx.fillRect(x, y, cornerSize, cornerSize);
            ctx.fillStyle = 'white';
            ctx.fillRect(x + moduleSize, y + moduleSize, cornerSize - 2 * moduleSize, cornerSize - 2 * moduleSize);
            ctx.fillStyle = 'black';
            ctx.fillRect(x + moduleSize * 2, y + moduleSize * 2, cornerSize - 4 * moduleSize, cornerSize - 4 * moduleSize);
        });
        
        return canvas.toDataURL();
    };

    useEffect(() => {
        const qrData = generateQRCode(`Name: ${profileData.name}\nTitle: ${profileData.title}\nStatus: ${profileData.status}`);
        setQrCode(qrData);
    }, [profileData.name, profileData.title, profileData.status]);

    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileData(prev => ({
                    ...prev,
                    photo: e.target.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (field, value) => {
        setProfileData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleExperienceChange = (index, value) => {
        const newExperience = [...profileData.experience];
        newExperience[index] = value;
        setProfileData(prev => ({
            ...prev,
            experience: newExperience
        }));
    };

    const handleToolsChange = (index, value) => {
        const newTools = [...profileData.tools];
        newTools[index] = value;
        setProfileData(prev => ({
            ...prev,
            tools: newTools
        }));
    };

    const addExperience = () => {
        setProfileData(prev => ({
            ...prev,
            experience: [...prev.experience, 'New experience']
        }));
    };

    const addTool = () => {
        setProfileData(prev => ({
            ...prev,
            tools: [...prev.tools, 'New tool']
        }));
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <div className="max-w-5xl mx-auto bg-white">
    
                <div className="relative bg-white px-8 py-4">
                    <div className="absolute top-4 right-8">
                        <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                            <span className="text-white text-lg">🔔</span>
                        </div>
                    </div>
                    <div className="text-center pt-8 pb-4">
                        <h1 className="text-4xl font-bold tracking-[0.3em] text-black">ICT AND MULTIMEDIA</h1>
                    </div>
                </div>

                <div className="flex">
            
                    <div className="w-80 bg-white px-6 py-8 border-r border-gray-200">
                    
                        <div className="relative mb-8 flex justify-center">
                            <div className="relative">
                                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 bg-gray-200">
                                    {profileData.photo ? (
                                        <img 
                                            src={profileData.photo} 
                                            alt="Profile" 
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                            <div className="w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center">
                                                <span className="text-white text-2xl">👤</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="absolute -bottom-2 -right-2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
                                >
                                    <Plus className="w-5 h-5" />
                                </button>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePhotoUpload}
                                    className="hidden"
                                />
                            </div>
                        </div>

                        <div className="text-center mb-8">
                            <input
                                type="text"
                                value={profileData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className="text-2xl font-bold text-center w-full border-none bg-transparent focus:outline-none focus:bg-gray-50 rounded px-2 py-1 mb-2"
                            />
                            <input
                                type="text"
                                value={profileData.title}
                                onChange={(e) => handleInputChange('title', e.target.value)}
                                className="text-gray-600 text-center w-full border-none bg-transparent focus:outline-none focus:bg-gray-50 rounded px-2 py-1"
                            />
                        </div>

                    
                        <div className="flex justify-center space-x-2 mb-8">
                            {[Github, Linkedin, Instagram, Twitter, MessageCircle].map((Icon, index) => (
                                <button key={index} className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                                    <Icon className="w-5 h-5 text-gray-700" />
                                </button>
                            ))}
                        </div>

                        
                        <div className="mb-12">
                            <button className="w-full bg-green-500 text-white py-3 px-6 rounded-md font-medium hover:bg-green-600 transition-colors">
                                Edit Profile
                            </button>
                        </div>

                    
                        <div className="mb-12">
                            <div className="flex items-center justify-center">
                                <span className="text-xl font-medium text-black mr-2">Status :</span>
                                <select
                                    value={profileData.status}
                                    onChange={(e) => handleInputChange('status', e.target.value)}
                                    className="text-xl text-green-500 font-medium bg-transparent border-none focus:outline-none focus:bg-gray-50 rounded px-2 py-1"
                                >
                                    <option value="Employed">Employed</option>
                                    <option value="Unemployed">Unemployed</option>
                                    <option value="Freelancer">Freelancer</option>
                                    <option value="Student">Student</option>
                                </select>
                            </div>
                        </div>

                    
                        <div className="flex justify-center">
                            <canvas
                                ref={canvasRef}
                                className="border border-gray-400"
                            />
                        </div>
                    </div>

                
                    <div className="flex-1 px-12 py-8 bg-gray-50">
                    
                        <div className="mb-12">
                            <h2 className="text-3xl font-normal text-green-400 mb-6">About me</h2>
                            <textarea
                                value={profileData.about}
                                onChange={(e) => handleInputChange('about', e.target.value)}
                                className="w-full text-lg text-gray-800 leading-relaxed resize-none border-none bg-transparent focus:outline-none focus:bg-white rounded p-3"
                                rows="3"
                            />
                        </div>

                    
                        <div className="mb-12">
                            <h2 className="text-3xl font-normal text-green-400 mb-6">Experience</h2>
                            <div className="space-y-4">
                                {profileData.experience.map((exp, index) => (
                                    <div key={index} className="flex items-start">
                                        <span className="text-2xl mr-4 mt-1">⚙️</span>
                                        <input
                                            type="text"
                                            value={exp}
                                            onChange={(e) => handleExperienceChange(index, e.target.value)}
                                            className="flex-1 text-lg text-gray-800 bg-transparent border-none focus:outline-none focus:bg-white rounded px-2 py-1"
                                        />
                                    </div>
                                ))}
                                <button
                                    onClick={addExperience}
                                    className="flex items-center text-green-500 hover:text-green-600 transition-colors ml-12"
                                >
                                    <Plus className="w-5 h-5 mr-2" />
                                    Add Experience
                                </button>
                            </div>
                        </div>

        
                        <div className="mb-16">
                            <h2 className="text-3xl font-normal text-green-400 mb-6">Tools</h2>
                            <div className="space-y-4">
                                {profileData.tools.map((tool, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center mr-4">
                                            <span className="text-white text-sm">✓</span>
                                        </div>
                                        <input
                                            type="text"
                                            value={tool}
                                            onChange={(e) => handleToolsChange(index, e.target.value)}
                                            className="flex-1 text-lg text-gray-800 bg-transparent border-none focus:outline-none focus:bg-white rounded px-2 py-1"
                                        />
                                    </div>
                                ))}
                                <button
                                    onClick={addTool}
                                    className="flex items-center text-green-500 hover:text-green-600 transition-colors ml-10"
                                >
                                    <Plus className="w-5 h-5 mr-2" />
                                    Add Tool
                                </button>
                            </div>
                        </div>

                
                        <div className="flex justify-end space-x-4">
                            {[
                                { Icon: Github, bg: 'bg-gray-800' },
                                { Icon: MessageCircle, bg: 'bg-green-500' },
                                { Icon: Linkedin, bg: 'bg-blue-600' },
                                { Icon: Instagram, bg: 'bg-purple-600' },
                                { Icon: Twitter, bg: 'bg-black' }
                            ].map(({ Icon, bg }, index) => (
                                <button key={index} className={`${bg} text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shadow-lg`}>
                                    <Icon className="w-6 h-6" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GraduateCertificate;