// const labels = Utils.months({count: 7});
export const OverviewData ={
    sixTwo :{
        key : 'fiveTwo',
        investmentType: "EQUITY",
        subCategoryName: "SECTORAL/THEMATIC",
        fundName : 'Bhandhan Liquid',
        clientCode : 'B53586',
        OrderDate : '2023/08/02',
        orderType : 'Lumpsum',
        amount : 1000,
        orderCategory : 'Fresh Order',
        orderStatus : 'Success',
        category:'Withdraw',
        imageUrl : 'logo1.svg',
        status :'Completed',
        returns : 45.7,
        returnYears: 3,
        holdingsData:[
            {name:"Reliance",allocation:79.8},
            {name:"tata",allocation:99.8},
            {name:"ongc",allocation:19.8},
            {name:"newComp",allocation:89.8},
            {name:"Reliance1",allocation:34.8},
            {name:"Reliance2",allocation:45.8},
            {name:"Reliance3",allocation:32.8},
            {name:"Reliance4",allocation:76.8},
            {name:"Reliance5",allocation:76.8},
            {name:"Reliance6",allocation:56.8},
            {name:"Reliance7",allocation:43.8},
        ],
        dataOneYear :{
            labels: ['Invested', 'Returns'],
            datasets: [
                {
                    data: [8, 26],
                    backgroundColor: ['blue', 'lightblue']
                },
            ],
            returns : 65.7,
            totalValue:57434,
            percentage:212.4,
        },
        dataThreeYear :{
            labels: ['Invested', 'Returns'],
            datasets: [
                {
                    data: [ 18, 12],
                    backgroundColor: ['blue', 'lightblue']
                },
            ],
            returns : 50.7,
            totalValue:10434,
            percentage:212.4,
        },
        dataFiveYear :{
            labels: ['Invested', 'Returns'],
            datasets: [
                {
                    data: [20, 16],
                    backgroundColor: ['blue', 'lightblue']
                },
            ],
            returns : 45.7,
            totalValue:84434,
            percentage:152.4,
        },
        dataTenYear :{
            labels: ['Invested', 'Returns'],
            datasets: [
                {
                    data: [11, 16],
                    backgroundColor: ['blue', 'lightblue']
                },
            ],
            returns : 77.7,
            totalValue:77434,
            percentage:112.4,
        },
        options :{

        }
    },
}
