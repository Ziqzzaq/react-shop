interface MenuItem {
    title: string,
    imageUrl: string,
    id: number,
    size?: string,
    linkUrl: string
}


export interface DirectoryState {
    sections: MenuItem[];
}