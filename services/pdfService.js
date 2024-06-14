const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const fs = require('fs');

const createPDF = async (data) => {
  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();

  // Set up fonts and text options
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const textSize = 12;
  const textOptions = { font, size: textSize };

  // Add text to the PDF
  page.drawText('PDF Example', { x: 50, y: 700, ...textOptions });

  // Add data from input to the PDF
  let yPos = 650;
  for (const [key, value] of Object.entries(data)) {
    page.drawText(`${key}: ${value}`, { x: 50, y: yPos, ...textOptions });
    yPos -= textSize + 5;
  }

  // Save the PDF to a file
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('output.pdf', pdfBytes);
};

module.exports = { createPDF };
