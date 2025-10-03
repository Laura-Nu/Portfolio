"use client";

import { SkillCard } from "@/components/skills/SkillCard";
import { useState } from "react";
import {
    FaJava, FaPython, FaDocker, FaGitAlt, FaReact, FaNodeJs, FaGithub, 
    FaGitlab, FaHtml5, FaUnity, FaAndroid, FaDatabase, FaCss3Alt, FaCloud
} from "react-icons/fa";
import {
    SiSharp, SiTypescript, SiFlutter, SiPostgresql, SiMongodb, SiOracle, SiFirebase,
    SiMysql, SiTailwindcss, SiBootstrap, SiDotnet, SiDart,
    SiTrello, SiLinear, SiFigma, SiJavascript
} from "react-icons/si";

export default function SkillGrid() {
    const [showAll, setShowAll] = useState(false);

    const skills = [
        // Bases de datos
        { icon: FaDatabase, name: "SQL Server", color: "#CC2927" },
        { icon: SiMysql, name: "MySQL", color: "#4479A1" },
        { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
        { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
        { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
        { icon: SiOracle, name: "Oracle DB", color: "#F80000" },

        // Lenguajes
        { icon: SiSharp, name: "C#", color: "#68217A" },
        { icon: FaJava, name: "Java", color: "#E76F00" },
        { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
        { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
        { icon: SiDart, name: "Dart", color: "#0175C2" },
        { icon: FaPython, name: "Python", color: "#3776AB" },
        { icon: FaHtml5, name: "HTML", color: "#E34F26" },
        { icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
        { icon: FaGitAlt, name: "Git", color: "#F05032" },

        // Frameworks & herramientas
        { icon: FaNodeJs, name: "Node.js", color: "#339933" },
        { icon: FaReact, name: "ReactJS", color: "#61DAFB" },
        { icon: SiDotnet, name: "ASP.NET Core", color: "#512BD4" },
        { icon: FaAndroid, name: "Android Studio", color: "#3DDC84" },
        { icon: FaUnity, name: "Unity", color: "#000000" },
        { icon: SiFlutter, name: "Flutter", color: "#02569B" },
        { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
        { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },

        //Cloud
        { icon: FaCloud, name: "Huawei Cloud", color: "#C7000B" },
        
        // Colaboración
        { icon: FaDocker, name: "Docker", color: "#2496ED" },
        { icon: FaGithub, name: "GitHub", color: "#181717" },
        { icon: FaGitlab, name: "GitLab", color: "#FC6D26" },
        { icon: SiTrello, name: "Trello", color: "#0079BF" },
        { icon: SiLinear, name: "Linear", color: "#5E6AD2" },
        { icon: SiFigma, name: "Figma", color: "#F24E1E" },
    ];

    // cantidad inicial visible
    const visibleSkills = showAll ? skills : skills.slice(0, 12);

    return (
        <div style={{ textAlign: "center" }}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                    gap: "24px",
                    justifyItems: "center",
                    marginBottom: "20px",
                }}
            >
                {visibleSkills.map((skill, index) => (
                    <SkillCard
                        key={index}
                        icon={skill.icon}
                        name={skill.name}
                        color={skill.color}
                    />
                ))}
            </div>

            {skills.length > 12 && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    style={{
                        padding: "10px 20px",
                        borderRadius: "12px",
                        background: "#007BFF",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: "bold",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#0056b3")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "#007BFF")
                    }
                >
                    {showAll ? "Show Less" : `Show All (${skills.length})`}
                </button>
            )}
        </div>
    );
}
