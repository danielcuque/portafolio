import type { IProject } from "@/types/projects";

export const projects: IProject[] = [
    {
        github: "https://github.com/danielcuque/dashboard-posts",
        title: "Dashboard Posts",
        deploy: "https://grupo-9.vercel.app/",
        description:
            "Web application, use dashboard to manage posts with content and images",
        techs: ["React", "TailwindCSS", "Firebase"],
    },
    {
        github: "https://github.com/grupo-9-practicas-iniciales/yousac-frontend",
        title: "U-sac",
        deploy: "https://yousac.netlify.app/",
        description: "University project to give recommendations to students",
        techs: ["React", "TailwindCSS", "MySQL"],
    },
    {
        github: "https://github.com/danielcuque/EDD_1S2023_PY_202112145",
        title: "Go drive",
        deploy: "https://danielcuque.github.io/EDD_1S2023_PY_202112145/EDD_Proyecto1_Fase3/index.html",
        description: "University project to store files and directories using data structures, such as, binary tree, stacks, queues, adjacent matrix, etc",
        techs: ["Javascript Vanilla", "TailwindCSS", "HTML5"],
    },
    {
        github: "https://github.com/pixel-tree/medical-app-demo",
        title: "Medical App",
        deploy: "https://pixel-tree-medical-app-demo.netlify.app",
        description: "Application to control patients",
        techs: ["TypeScript", "Material UI", "Formik"],
    },
    {
        github: "https://github.com/danielcuque/OLC2_202112145_P2",
        title: "T-Swift",
        deploy: "https://tswift-compiler.vercel.app/",
        description: "Compiler made with Go, from Swift to 3AC",
        techs: ["TypeScript", "TailwindCSS", "Golang", "ReactJS"],
    },
] as const;