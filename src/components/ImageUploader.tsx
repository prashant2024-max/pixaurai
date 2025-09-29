import React, { useState } from "react";
import { Zap, ArrowRight, Brain } from "lucide-react";
import { section } from "framer-motion/client";

const mockAvatars = [
  { name: "Alice", avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "Bob", avatar: "https://i.pravatar.cc/150?img=2" },
  { name: "Carol", avatar: "https://i.pravatar.cc/150?img=3" },
  { name: "David", avatar: "https://i.pravatar.cc/150?img=4" },
];

const ImageUploader = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const [script, setScript] = useState("");

  const handleGenerate = () => {
    if (!script.trim()) return;
    alert(
      `🤖 Generating AI Avatar for: "${script}" using ${mockAvatars[selectedAvatar].name}'s template`
    );
  };

  return (
    <section className="pb-20">
      <div className="max-w-5xl mx-auto p-6 ">
        {/* <h2 className="text-3xl font-bold mb-6 text-center">
        AI Avatar <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Neural Lab</span>
      </h2> */}

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Avatar Neural Lab
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Avatar Selection */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Select AI Model</h3>
              <div className="grid grid-cols-4 gap-3">
                {mockAvatars.map((avatar, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedAvatar(index)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedAvatar === index
                        ? "border-blue-500 scale-105 shadow-lg shadow-blue-500/25"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={avatar.avatar}
                      alt={avatar.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Script Input */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Neural Input Script
              </h3>
              <textarea
                placeholder="Enter your AI script..."
                value={script}
                onChange={(e) => setScript(e.target.value)}
                className="w-full min-h-[120px] p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                maxLength={200}
              />
              <div className="text-right text-sm mt-1 text-gray-500">
                {script.length}/200 characters
              </div>
            </div>
          </div>

          {/* Preview & Generate Button */}
          <div className="space-y-6">
            <div className="aspect-video border-2 border-dashed flex items-center justify-center relative overflow-hidden rounded-xl bg-gray-50">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-blue-100 mb-2">
                  <Brain className="text-blue-500 animate-pulse" />
                </div>
                <p className="text-gray-600">AI Avatar Preview</p>
              </div>
              {selectedAvatar !== null && (
                <img
                  src={mockAvatars[selectedAvatar].avatar}
                  alt="Selected avatar"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
              )}
            </div>

            <button
              onClick={handleGenerate}
              disabled={!script.trim()}
              className="w-full py-4 font-semibold text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
            >
              <Zap size={20} />
              Generate AI Avatar
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageUploader;
