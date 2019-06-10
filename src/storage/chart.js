import {format} from "date-fns";
import { getExpenses } from "./expense";



const date = new Date();
const month = format(date, "YYYY-MM"); //2019-06
const expenses = getExpenses();
const monthExpenses = expenses[month];

//배열 리스트

export const geteatList = () =>{
    const eatList = [];
    for(const days in monthExpenses){
        if(monthExpenses[days][0].category ==="식비"){
            monthExpenses[days][0].day = days;
            eatList.push(monthExpenses[days][0]);
        }
    } 
    return eatList;
}

export const getetcList = () =>{
    const etcList = [];
    for(const days in monthExpenses){
        if(monthExpenses[days][0].category ==="잡비"){
            monthExpenses[days][0].day = days;
            etcList.push(monthExpenses[days][0]);
        }
    } 
    return etcList;
}

export const getplayList = () =>{
    const playList = [];
    for(const days in monthExpenses){
        if(monthExpenses[days][0].category ==="유흥비"){
            monthExpenses[days][0].day = days;
            playList.push(monthExpenses[days][0]);
        }
    } 
    return playList;
}

export const gettrafficList = () =>{
    const trafficList = [];
    for(const days in monthExpenses){
        if(monthExpenses[days][0].category ==="교통비"){
            monthExpenses[days][0].day = days;
            trafficList.push(monthExpenses[days][0]);
        }
    } 
    return trafficList;
}