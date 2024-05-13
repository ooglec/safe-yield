export const graph_data1 = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "SAFE Price",
      data: [
        1.4, 1.075, 1.051, 0.99, 1.074, 0.77, 0.85, 1.1, 1.37, 0.88, 0.84, 1.02,
        
      ],
      borderColor: "rgba(201, 217, 78, 1)",

    },
  ],
};
export const graph_data2 = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Treasury APR",
      data: [
        5,
        9,
        18,
        25,
        22,
        13,
        27,
        23,
        24,
        19,
        27,
        20, // Remove the "%" signs and keep the values as numbers
      ],
      borderColor: "rgba(242, 135, 5, 1)",
    },
  ],
};



export   const options = {
  elements: {
    line: {
      backgroundColor: "rgba(242, 236, 228, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)", // Border color for the line
      borderWidth: 2, // Border width for the line
    },
  },

  tension: 0.4,
  scales: {
    y: {
      ticks: {
        color: "#F2ECE4", // Text color for the y-axis
      },
    },
    x: {
      ticks: {
        color: "#F2ECE4", // Text color for the x-axis
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "#ffffff", // Color for the legend labels
      },
    },
  }
};


