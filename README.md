# Skill Report Generator with PDF Download

This Angular application allows users to input data related to their skills, dynamically generate a radar chart to visually represent their skill levels, and download the generated report as a PDF.

## Features

- **Dynamic Radar Chart Generation**: 
  - Users can input skill data through a form.
  - The application generates a radar chart based on the inputted skill data using PrimeNG's powerful charting library.
  
- **Interactive Form**:
  - The form collects various skills and their corresponding levels.
  - After submission, the data is rendered into a radar chart for visual analysis.
  
- **PDF Report Download**:
  - Users can download the generated radar chart and report as a PDF file.
  - The PDF generation uses `html2canvas` and `jspdf` to ensure high-quality and accurate captures of the report content.

- **Responsive Design**:
  - The application is built to be responsive, ensuring compatibility across various devices and screen sizes.

## Technologies Used

- **Angular 17**: Leveraging the latest Angular framework for building scalable and maintainable web applications.
- **PrimeNG**: Utilized for UI components and charts.
- **html2canvas & jsPDF**: For capturing HTML content and generating downloadable PDFs.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Angular CLI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tejas821/profile-evaluation-report-generation.git
   cd profile-evaluation-report-generation
```
