import React, { ReactNode } from 'react';
interface DraggerProps {
    onFile: (files: FileList) => void;
    children?: ReactNode;
}
export declare const Dragger: React.FC<DraggerProps>;
export default Dragger;
