// import { useEffect, useState } from "react";

// export default function App() {
//     // Array of all car objects
//     const carList = [
//         {
//             ID: 1,
//             Income: "Radhe Textile",
//             Type: Cash,
//             Currency: USD,
//             Date: "19 Nov,2021",
//             Account:Credit

//         },
//         {
//             ID: 2,
//             Income: "Radhe Textile",
//             Type: Bank,
//             Currency: INR,
//             Date: "19 Nov,2021",
//             Account:Debit
//         },
//         {
//             ID: 3,
//             Income: "Radhe Textile",
//             Type: Cash,
//             Currency: USD,
//             Date: "19 Nov,2021",
//             Account:Debit
//         },
//         {
//             ID: 4,
//             Income: "Radhe Textile",
//             Type: Bank,
//             Currency: INR,
//             Date: "19 Nov,2021",
//             Account:Credit
//         },
//         {
//             ID: 5,
//             Income: "Radhe Textile",
//             Type: Cash,
//             Currency: INR,
//             Date: "19 Nov,2021",
//             Account:Debit
//         }
//     ];
//     // List of all cars satisfing all the filters
//     const [filteredList, setFilteredList] = useState(carList);
//     // Selected Brand name filter
//     const [selectedBrand, setSelectedBrand] = useState("");
//     // Selected Year filter
//     const [selectedYear, setSelectedYear] = useState();

//     const filterByBrand = (filteredData) => {
//         // Avoid filter for empty string
//         if (!selectedBrand) {
//             return filteredData;
//         }

//         const filteredCars = filteredData.filter(
//             (car) => car.name.split(" ").indexOf(selectedBrand) !== -1
//         );
//         return filteredCars;
//     };
//     const filterByYear = (filteredData) => {
//         // Avoid filter for null value
//         if (!selectedYear) {
//             return filteredData;
//         }

//         const filteredCars = filteredData.filter(
//             (car) => car.release_year === selectedYear
//         );
//         return filteredCars;
//     };

//     // Update seletedBrand state
//     const handleBrandChange = (event) => {
//         setSelectedBrand(event.target.value);
//     };

//     // Toggle seletedYear state
//     const handleYearChange = (event) => {
//         const inputYear = Number(event.target.id);

//         if (inputYear === selectedYear) {
//             setSelectedYear("");
//         } else {
//             setSelectedYear(inputYear);
//         }
//     };

//     useEffect(() => {
//         var filteredData = filterByBrand(carList);
//         filteredData = filterByYear(filteredData);
//         setFilteredList(filteredData);
//     }, [selectedBrand, selectedYear]);

//     return (
//         <div className="App">
//             <div className="brand-filter">
//                 <div>Filter by Brand :</div>
//                 <select
//                     id="brand-input"
//                     value={selectedBrand}
//                     onChange={handleBrandChange}
//                 >
//                     <option value="">All</option>
//                     <option value="BMW">BMW</option>
//                     <option value="VW">VW</option>
//                     <option value="Audi">Audi</option>
//                 </select>
//             </div>
//             <div>Filter by Year</div>
//             <div id="year-options" onClick={handleYearChange}>
//                 <div
//                     className={selectedYear === 2018 ? "active-option" : "filter-option"}
//                     id="2018"
//                 >
//                     2018
//                 </div>
//                 <div
//                     className={selectedYear === 2019 ? "active-option" : "filter-option"}
//                     id="2019"
//                 >
//                     2019
//                 </div>
//                 <div
//                     className={selectedYear === 2020 ? "active-option" : "filter-option"}
//                     id="2020"
//                 >
//                     2020
//                 </div>
//             </div>

//             <div id="car-list">
//                 {filteredList.map((item, index) => (
//                     <div className="car-item" key={index}>
//                         <div className="car-name">{`Name: ${item.name}`}</div>
//                         <div className="car-year">{`Year: ${item.release_year}`}</div>
//                         <img className="car-image" src={item.url} alt="car-img" />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }