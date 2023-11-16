window.addEventListener('load', function() {
    

    const tableElement = document.querySelector('.table');

    plantsData.forEach(item => {
        const row = tableElement.insertRow();
        const { sNo, name, b_Name, uses, img } = item;
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);

        cell1.innerHTML = sNo;
        cell2.innerHTML = name;
        cell3.innerHTML = b_Name;
        cell4.innerHTML = uses;
        cell4.classList.add('justify-text');
        // Create an anchor element and set its href to the image URL
        const link = document.createElement('a');
        link.href = img;
        link.textContent = 'View Image'; // Text for the link
        link.target = '_blank'; // Open the link in a new tab

        // Append the anchor element to cell5
        cell5.appendChild(link);
    });
});
