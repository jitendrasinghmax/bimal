import { atom, atomFamily, selector } from "recoil";

export const cartAtom=atom({
    key:"cart",
    default:[]
})

export const cardAtomFamily=atomFamily({
    key:"card atom family",
    default:(id)=>{
        return 1
    }
})

export const dieNowAtom=atom({
    key:"dieNow",
    default:false
})