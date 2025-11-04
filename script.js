document.addEventListener('DOMContentLoaded', () => {
    const fleetTableBody = document.querySelector('#fleetTable tbody');
    const exportExcelButton = document.getElementById('exportExcel');

    // Sample data (in a real application, this would come from a database or API)
    const fleetData = [
        { id: 'V001', make: 'Toyota', model: 'Camry', year: 2020, mileage: 55000, lastService: '2024-09-15' },
        { id: 'V002', make: 'Ford', model: 'F-150', year: 2018, mileage: 82000, lastService: '2024-08-01' },
        { id: 'V003', make: 'Mercedes', model: 'Sprinter', year: 2022, mileage: 30000, lastService: '2025-01-20' },
        { id: 'V004', make: 'Nissan', model: 'Titan', year: 2021, mileage: 45000, lastService: '2024-11-10' }
    ];

    // Function to populate the table
    function populateTable() {
        fleetTableBody.innerHTML = ''; // Clear existing rows
        fleetData.forEach(vehicle => {
            const row = fleetTableBody.insertRow();
            row.insertCell().textContent = vehicle.id;
            row.insertCell().textContent = vehicle.make;
            row.insertCell().textContent = vehicle.model;
            row.insertCell().textContent = vehicle.year;
            row.insertCell().textContent = vehicle.mileage;
            row.insertCell().textContent = vehicle.lastService;
        });
    }

    // Function to export table data to Excel
    exportExcelButton.addEventListener('click', () => {
        const wb = XLSX.utils.table_to_book(document.getElementById('fleetTable'), { sheet: "Fleet Report" });
        XLSX.writeFile(wb, "Fleet_Vehicle_Report.xlsx");
    });

    // Initial population of the table
    populateTable();
});