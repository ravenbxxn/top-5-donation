const fetchTopDonations = async () => {
    const response = await fetch('/api/top-donations');
    const data = await response.json();
    console.log(data);
    // Handle displaying the donations here
};

fetchTopDonations();