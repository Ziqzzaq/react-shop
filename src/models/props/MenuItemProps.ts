import {RouteComponentProps} from "react-router-dom";

export interface MenuItemProps extends RouteComponentProps<any>{
    title: string;
    imageUrl: string;
    size?: string;
    linkUrl: string;
}