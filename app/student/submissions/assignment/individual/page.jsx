"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DashboardNav from "../../../components/DashboardNav";
import Sidebar from "../../../components/Sidebar";
import { AiOutlineFilePdf, AiOutlineCheckCircle } from "react-icons/ai";

const studentGroup = [
    {
      id: 1,
      studentName: "Ojo Oyewole",
      studentMatric: "CS/HND/F22/3260",
      image: "/assets/images/profile.jpg"
    },
    {
      id: 2,
      studentName: "Sarah Bouchard",
      studentMatric: "CS/HND/F22/3260",
      image: "/assets/images/profile.jpg"
    },
    {
      id: 3,
      studentName: "Miracle Abidemi",
      studentMatric: "CS/HND/F22/3260",
      image: "/assets/images/profile.jpg"
    },
  ];

const Page = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all"); // filter state
  //const studentTotal = length(studentGroup);

  //
  const filteredSubmits = studentGroup.filter((student) => {
    if (filter === "all") return true;
    return false;
  });

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];

    // Check if the file is a PDF
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setError(null);
      startUpload();
    } else {
      setError("The document must be in PDF format.");
      setFile(null);
    }
  };

  const startUpload = () => {
    setUploading(true);
    setUploadProgress(0);

    // Simulating upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200); // Adjust speed as necessary
  };

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-60 w-full">
        {/* Dashboard Navigation */}
        <div className="bg-white w-full h-[128px]">
          <DashboardNav />
        </div>

        {/* Content */}
        <motion.div
          className="p-8"
          initial={{ opacity: 0, scale: 0.9, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotate: 30 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            type: "spring",
            stiffness: 300,
          }}
        >
          <div className="flex flex-row gap-[40px]">
            <div className="flex flex-col">
              <h1 className="text-[32px] font-semibold mb-4">
                Cyber Security Individual Assignment
              </h1>
              <div className="text-primary text-[16px] mb-6">
                <p className="text-[16px]">Group A</p>
                <div className="flex flex-row gap-2 items-center mt-3">
                  <Image
                    src="/assets/time-red.png"
                    width={20}
                    height={20}
                    className="w-[24px] h-[24px] "
                    alt="time"
                  />
                  <p className="text-[16px]">To be submitted at 10:00 AM</p>
                </div>
                <div className="flex flex-row gap-2 items-center mt-2">
                  <Image
                    src="/assets/calendar.png"
                    width={20}
                    height={20}
                    className="w-[24px] h-[24px] "
                    alt="time"
                  />
                  <p className="text-[16px]">Mon SEP 14</p>
                </div>
              </div>

              {/* Upload Section */}
              <div className="flex fex-row items-center w-[887px] justify-between mt-5">
                <div className="flex flex-row gap-2 items-center mt-2">
                  <Image
                    src="/assets/attachment.png"
                    width={20}
                    height={20}
                    className="w-[33px] h-[35px] "
                    alt="time"
                  />
                  <p className="text-[#6A707E] text-[18px]">Attachment</p>
                </div>

                <div className="flex flex-row gap-2 items-center mt-2">
                  <Image
                    src="/assets/info.png"
                    width={20}
                    height={20}
                    className="w-[24px] h-[24px] "
                    alt="time"
                  />
                  <p className="text-black text-[16px]">
                    The document must be in PDF format.
                  </p>
                </div>
              </div>
              <div className="w-[887px] h-[360px] mt-5 p-6 border-2 border-dashed flex justify-center justify-items-center items-center border-primary rounded-lg text-center relative">
                {file && (
                  <p className="text-gray-500 uppercase text-[20px]">
                    Drag file here or{" "}
                    <span className="text-primary underline text-[20px] font-bold uppercase cursor-pointer">
                      browse file
                    </span>
                  </p>
                )}
                {error && (
                  <p className="text-primary uppercase text-[20px]">{error}</p>
                )}
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                {!file && (
                  <p className="text-gray-500 uppercase text-[20px]">
                    Drag file here or{" "}
                    <span className="text-primary underline text-[20px] font-bold uppercase cursor-pointer">
                      browse file
                    </span>
                  </p>
                )}
              </div>

              <div className="mt-3 flex justify-start flex-start w-[887px]">
                {uploading && (
                  <div className="w-full mt-4">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                    <p>uploading</p>
                    <p className="text-sm text-primary mt-2">
                      {uploadProgress}%
                    </p>
                  </div>
                )}
                {file && !uploading && (
                  <div className="flex items-center mt-4 justify-between">
                    <AiOutlineFilePdf className="text-red-500 text-3xl mr-2" />
                    <p className="text-sm font-semibold">{file.name}</p>
                    <AiOutlineCheckCircle className="text-green-500 text-3xl ml-[440px]" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
