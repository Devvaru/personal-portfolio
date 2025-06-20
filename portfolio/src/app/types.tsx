export interface Project {
    title: string;
    url: string;
    imgs: string[];
    description: string;
    frameworks: string[];
}

export type CardDetail = {
    imgUrl: string;
    imgTitle: string;
    imgAlt: string;
}

export type DisplayOption = 'projects' | 'designs';

export interface DisplayToggleProps {
    activeDisplay: DisplayOption;
    setActiveDisplay: React.Dispatch<React.SetStateAction<DisplayOption>>;
}

export type ContentState = {
    activeDisplay: DisplayOption;
    setActiveDisplay: React.Dispatch<React.SetStateAction<DisplayOption>>;
}

export type ModalState = {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProjectsModalProps extends ModalState {
    projectImgs: string[];
}