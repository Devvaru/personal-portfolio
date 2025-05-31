export type CardDetail = {
    imgUrl: string;
    imgTitle: string;
    imgAlt: string;
}

export type DisplayOption = 'projects' | 'designs';

export type ContentState = {
    activeDisplay: DisplayOption;
    setActiveDisplay: React.Dispatch<React.SetStateAction<DisplayOption>>;
}