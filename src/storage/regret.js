import {format} from "date-fns";
import { getExpenses } from "./expense";



const date = new Date();
const month = format(date, "YYYY-MM"); //2019-06
const expenses = getExpenses();
const monthExpenses = expenses[month];

//배열 리스트

export const getHighList = () =>{
    const highList = [];
    for(const days in monthExpenses){
        if(monthExpenses[days][0].regret ==="상"){
            monthExpenses[days][0].day = days;
            highList.push(monthExpenses[days][0]);
        }
    } 
    return highList;
}

export const getMediumList = () =>{
    const mediumList = [];
    for(const days in monthExpenses){
        if(monthExpenses[days][0].regret ==="중"){
            monthExpenses[days][0].day = days;
            mediumList.push(monthExpenses[days][0]);
        }
    } 
    return mediumList;
}

export const getLowList = () =>{
    const lowList = [];
    for(const days in monthExpenses){
        if(monthExpenses[days][0].regret ==="하"){
            monthExpenses[days][0].day = days;
            lowList.push(monthExpenses[days][0]);
        }
    } 
    return lowList;
}