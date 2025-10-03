"use client";

import { IconType } from "react-icons";
import { Column, Text } from "@once-ui-system/core";

interface SkillCardProps {
    icon: IconType;
    name: string;
    color?: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, name, color }) => {
    return (
        <Column
            horizontal="center"
            vertical="center"
            radius="l"
            background="surface"
            shadow="m"
            className="skill-card"
            style={{
                width: "140px",
                height: "140px",
                transition: "all 0.3s ease",
                cursor: "pointer",
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
        >
            <Icon size={48} style={{ color }} />
            <Text marginTop="8" variant="body-default-m" align="center">
                {name}
            </Text>
        </Column>
    );
};
