const patientData = {
    // labels: Array.from({ length:    51 }, (_, i) => 30 + i), // Ages 30 to 80
    labels: [ 30 , 40 , 50 , 60 , 70 , 80,90 ],
    datasets: [
      {
        label: 'Number of Patients',
        data: [ 3, 6, 6, 2, 40, 50, 30],
        backgroundColor: 'rgba(240, 19, 67, 0.9)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  export default patientData;
  