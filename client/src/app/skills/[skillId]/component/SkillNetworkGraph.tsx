"use client";

import {
    Background,
    Controls,
    MiniMap,
    ReactFlow,
    type Edge,
    type Node,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

type Skill = {
    id: string;
    name: string;
    category: string;
};

type SkillNetworkGraphProps = {
    skillId: string;
    skillName: string;
    skills: Skill[];
};

const CENTER = {
    x: 400,
    y: 220,
};

const RADIUS = 230;

function createCenterNode(skillId: string, skillName: string): Node {
    return {
        id: skillId,
        position: CENTER,
        data: {
            label: (
                <div className="text-center">
                    <p className="text-sm font-semibold">{skillName}</p>
                    <p className="mt-1 text-[11px] text-white/70">
                        Current skill
                    </p>
                </div>
            ),
        },
        style: {
            width: 150,
            height: 70,
            borderRadius: 16,
            border: "2px solid #1078A9",
            background: "#1078A9",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 12px 30px rgba(16, 120, 169, 0.2)",
        },
    };
}

function createSkillNodes(skills: Skill[]): Node[] {
    return skills.map((skill, index) => {
        const angle =
            (index / skills.length) * Math.PI * 2;

        return {
            id: skill.id,
            position: {
                x: CENTER.x + Math.cos(angle) * RADIUS,
                y: CENTER.y + Math.sin(angle) * RADIUS,
            },
            data: {
                label: (
                    <div className="text-center">
                        <p className="text-sm font-medium text-slate-900">
                            {skill.name}
                        </p>

                        <p className="mt-1 text-[10px] text-slate-400">
                            {skill.category}
                        </p>
                    </div>
                ),
            },
            style: {
                width: 135,
                height: 60,
                borderRadius: 14,
                border: "1px solid #e2e8f0",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                    "0 6px 20px rgba(15, 23, 42, 0.06)",
            },
        };
    });
}

function createEdges(
    skillId: string,
    skills: Skill[]
): Edge[] {
    return skills.map((skill) => ({
        id: `${skillId}-${skill.id}`,
        source: skillId,
        target: skill.id,
        type: "smoothstep",
        style: {
            stroke: "#cbd5e1",
            strokeWidth: 1.5,
        },
    }));
}

export default function SkillNetworkGraph({
    skillId,
    skillName,
    skills,
}: SkillNetworkGraphProps) {
    const nodes = [
        createCenterNode(skillId, skillName),
        ...createSkillNodes(skills),
    ];

    const edges = createEdges(skillId, skills);

    return (
        <div className="h-125 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                fitView
                nodesConnectable={false}
                nodesDraggable={false}
                proOptions={{
                    hideAttribution: true,
                }}
            >
                <Background gap={20} size={1} />
                <Controls />
                <MiniMap />
            </ReactFlow>
        </div>
    );
}