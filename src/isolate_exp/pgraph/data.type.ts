export enum PType {
    storyline = 'storyline',
    os = 'os'
}
export interface PNode {
    id: string;
    type: PType;
    name: string;
    xIndex?: number;
    yIndex?: number;
    leftBadgeICClass?: string;
    rightBadgeICClass?: string;
    icClass: string;
    strokeColor: string;
    bgColor: string;
    children: PNode[];
}
export interface PLink {
    id: string;
    source: { xIndex: number, yIndex: number };
    target: { xIndex: number, yIndex: number };
    type: PType;
}
export interface PGraph {
    nodes: PNode[];
    links: PLink[];
}
