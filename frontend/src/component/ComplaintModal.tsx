"use client";

import { useState } from "react";
import { X, Upload, FileText, User, Calendar, MapPin } from "lucide-react";
import { type Candidate } from "../data/candidates";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "jspdf-autotable";

interface ComplaintModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidate: Candidate;
}

const complaintGrounds = [
  "Not a citizen of Nepal./ नेपाली नागरिक नभएको ",
  "For House of Representatives elections: Not listed in the final voter roll of any rural municipality or municipality./ प्रतिनिधि सभा सदस्य निर्वाचनको हकमा कुनै गाउँपालिका वा नगरपालिकाको अन्तिम मतदाता नामावलीमा नाम समावेश नभएको",
  "For Provincial Assembly elections: Not listed in the final voter roll of any rural municipality or municipality in the relevant province./ प्रदेश सभा सदस्य निर्वाचनको हकमा सम्बन्धित प्रदेशको कुनै गाउँपालिका वा नगरपालिकाको अन्तिम मतदाता नामावलीमा नाम समावेश नभएको",
  "Under 25 years of age./ पच्चीस वर्ष उमेर पूरा नभएको ",
  "Disqualified under federal law./ कुनै संघीय कानूनले अयोग्य भएको",
  "Holds an office of profit (any position receiving remuneration or financial benefits from government funds)./ कुनै लाभको पदमा बहाल रहेको (लाभको पद: कुनै सरकारी कोषबाट पारिश्रमिक वा आर्थिक सुविधा पाउने अन्य पद)",
  "Employed in a remunerated position by the Government of Nepal, Provincial Government, Local Government, or an institution receiving grants from these entities./ नेपाल सरकार, प्रदेश सरकार वा स्थानीय तहमा तथा नेपाल सरकार, प्रदेश सरकार वा स्थानीय तहबाट अनुदान प्राप्त संस्थामा पारिश्रमिक पाउने गरी बहाल रहेको",
  "Convicted under election laws, with less than two years elapsed since completing the sentence./ निर्वाचन सम्बन्धी प्रचलित कानून बमोजिम सजाय पाई त्यस्तो सजाय भुक्तान गरेको मितिले दुई वर्ष पूरा नभएको ",
  "Convicted of corruption, rape, human trafficking, drug trafficking, money laundering, passport misuse, kidnapping, or other crimes involving moral turpitude, or sentenced to life imprisonment or 20 years or more, with the verdict finalized./ भ्रष्टाचार, जबरजस्ती करणी, मानव बेचबिखन तथा ओसारपसार, लागू औषध बिक्री वितरण तथा निकासी वा पैठारी, सम्पत्ति शुद्धिकरण, राहदानी दुरुपयोग, अपहरण सम्बन्धी कसूर वा नैतिक पतन देखिने अन्य फौजदारी कसूरमा सजाय पाई वा कुनै कसुरमा जन्म कैद वा बीस वर्ष वा सोभन्दा बढी कैदको सजाय पाई त्यस्तो फैसला अन्तिम भएको ",
  "Convicted of organized crime or manslaughter (with less than 20 years' imprisonment), with less than six years elapsed since completing the sentence./ सङ्गठित अपराध सम्बन्धी कसूरमा कैदको सजाय पाई वा कर्तव्य ज्यान सम्बन्धी कसुरमा बीस वर्षभन्दा कम कैदको सजाय पाई त्यस्तो सजाय भुक्तान गरेको मितिले ६ वर्ष पूरा नभएको",
  "Convicted of caste-based discrimination, untouchability, witchcraft, or polygamy, with less than three years elapsed since completing the sentence./ जातीय भेदभाव तथा छुवाछुत, बोक्सा बोक्सी वा बहुविवाह सम्बन्धी कसूरमा कैदको सजाय पाई त्यस्तो सजाय भुक्तान गरेको मितिले तीन वर्ष पूरा नभएको",
  "Convicted of any offense with five years or more imprisonment, with less than six years elapsed since completing the sentence./ अन्य कुनै कसूरमा ५ वर्ष वा सो भन्दा बढी कैदको सजाय पाई त्यस्तो सजाय भुक्तान गरेको मितिले ६ वर्ष पूरा नभएको ",
  "Blacklisted under prevailing law (for the duration of blacklisting)./ प्रचलित कानून बमोजिम कालो सूचिमा रहेकोमा सो अवधिभर",
  "Currently imprisoned./ कैदमा बसेकोमा कैद बसेको अवधि नसकिएको ",
  "Of unsound mind./ मानसिक सन्तुलन ठिक नभएको ",
  "Holds permanent residency in a foreign country in violation of Article 291 of the Constitution./ संविधानको धारा २९१ विपरित विदेशी मुलुकको स्थायी आवासीय अनुमति प्राप्त गरेको"
];

export default function ComplaintModal({ isOpen, onClose, candidate }: ComplaintModalProps) {
  const [formData, setFormData] = useState({
    constituencyNo: "",
    district: "",
    candidateName: candidate.name,
    candidateRegNo: "",
    politicalParty: "",
    grounds: [] as string[],
    evidenceFiles: [] as File[],
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5),
    candidateRepName: "",
    petitionerName: "",
    petitionerSignature: "",
    voterNumber: "",
    petitionerPhone: "",
    petitionerAddress: ""
  });

  const handleGroundChange = (ground: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        grounds: [...prev.grounds, ground]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        grounds: prev.grounds.filter(g => g !== ground)
      }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      evidenceFiles: [...prev.evidenceFiles, ...files]
    }));
  };

  const generatePDF = async () => {
    // Create a completely isolated iframe to avoid CSS inheritance issues
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.left = '-9999px';
    iframe.style.top = '0';
    iframe.style.width = '210mm';
    iframe.style.height = '297mm';
    iframe.style.border = 'none';
    iframe.style.backgroundColor = 'white';
    
    document.body.appendChild(iframe);
    
    // Wait for iframe to load
    await new Promise(resolve => {
      iframe.onload = resolve;
      iframe.src = 'about:blank';
    });
    
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDoc) {
      throw new Error('Could not access iframe document');
    }
    
    // Create a completely isolated HTML document
    iframeDoc.open();
    iframeDoc.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: Arial, sans-serif;
            font-size: 12px;
            line-height: 1.4;
            color: #000000;
            background-color: #ffffff;
            padding: 20mm;
            width: 210mm;
          }
          h1, h2, h3, p, ul, li {
            color: #000000;
          }
          .container {
            width: 100%;
            max-width: 170mm;
            position: relative;
          }
          .main-content {
            width: 100%;
            margin-bottom: 40px;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .section {
            margin-bottom: 20px;
          }
          .petitioner-details {
            text-align: right;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #cccccc;
          }
          .petitioner-details h3 {
            margin-bottom: 15px;
            font-size: 14px;
            font-weight: bold;
          }
          .petitioner-details p {
            margin: 5px 0;
            font-size: 12px;
            line-height: 1.4;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="main-content">
            <div class="header">
              <h1>COMPLAINT AGAINST CANDIDATE NOMINATION</h1>
            </div>
            
            <div class="section">
              <p><strong>To: Election Officer,</strong></p>
              <p>House of Representatives Member Election Area No. ${formData.constituencyNo}</p>
              <p>${formData.district} District.</p>
            </div>
            
            <div class="section">
              <p>In the election for the post of House of Representatives member from District, Election Area No. ${formData.constituencyNo}, Mr./Ms. ${formData.candidateName} whose nomination paper was registered under registration no. ${formData.candidateRegNo} as a candidate from ${formData.politicalParty} / independent candidate is ineligible to be a candidate for that post due to the following reasons, therefore, this complaint is filed to request the cancellation of their nomination paper.</p>
            </div>
            
            <div class="section">
              <h3>GROUNDS FOR COMPLAINT:</h3>
              <p>The individual,</p>
              <div>
                ${formData.grounds.map((ground, index) => {
                  const groundIndex = complaintGrounds.indexOf(ground);
                  const englishGround = ground.split('/')[0].trim();
                  return `<p><strong>${index + 1}.</strong> ${englishGround}</p>`;
                }).join('')}
              </div>
            </div>
            
            <div class="section">
              <h3>EVIDENCE ATTACHED:</h3>
              ${formData.evidenceFiles.length > 0 ? `
                <div>
                  ${formData.evidenceFiles.map((file, index) => `
                    <p>${index + 1}. ${file.name}</p>
                  `).join('')}
                </div>
              ` : '<p>(No evidence materials attached)</p>'}
            </div>
            
            <div class="section">
              <p><strong>Date:</strong> ${formData.date}</p>
              <p><strong>Time:</strong> ${formData.time}</p>
              <p><strong>Candidate/Representative of Candidate:</strong> ${formData.candidateRepName || 'N/A'}</p>
            </div>
          </div>
          
          <div class="petitioner-details">
            <h3>COMPLAINANT DETAILS:</h3>
            <p><strong>Name, Surname:</strong> ${formData.petitionerName}</p>
            <p><strong>Signature:</strong> ${formData.petitionerSignature}</p>
            <p><strong>Voter ID No.:</strong> ${formData.voterNumber}</p>
            <p><strong>Contact Address:</strong> ${formData.petitionerAddress}</p>
            <p><strong>Contact Phone No. / Mobile No.:</strong> ${formData.petitionerPhone}</p>
            <p><strong>Date:</strong> ${formData.date}</p>
          </div>
        </div>
      </body>
      </html>
    `);
    iframeDoc.close();
    
    // Wait a bit for the content to render
    await new Promise(resolve => setTimeout(resolve, 100));

    try {
      // Convert iframe content to canvas
      const canvas = await html2canvas(iframeDoc.body, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: 210 * 3.7795275591, // Convert mm to pixels
        height: 297 * 3.7795275591
      });

      // Create PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Save the PDF
      pdf.save(`complaint_${formData.candidateName.replace(/\s+/g, '_')}_${formData.date}.pdf`);

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again or contact support.');
    } finally {
      // Clean up
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (formData.grounds.length === 0) {
      alert("Please select at least one ground for complaint.");
      return;
    }

    if (!formData.petitionerName || !formData.voterNumber || !formData.petitionerAddress) {
      alert("Please fill in all required petitioner information.");
      return;
    }

    try {
      // Generate and download PDF
      await generatePDF();
      
      // Show success message
      alert("Complaint form generated and downloaded successfully!");
      onClose();
    } catch (error) {
      console.error('Error submitting complaint:', error);
      alert("Error generating PDF. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-card border border-border/30 rounded-2xl w-full h-full max-w-none max-h-none overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border/30 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">File Complaint against Candidate Nomination.</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Basic Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Basic Information / आधारभूत विवरण
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  House of Representatives Constituency No. / प्रतिनिधि सभा सदस्य निर्वाचन क्षेत्र नं 
                </label>
                <input
                  type="text"
                  value={formData.constituencyNo}
                  onChange={(e) => setFormData(prev => ({ ...prev, constituencyNo: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  District / जिल्ला
                </label>
                <input
                  type="text"
                  value={formData.district}
                  onChange={(e) => setFormData(prev => ({ ...prev, district: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Candidate Name / उम्मेदवारको नाम
                </label>
                <input
                  type="text"
                  value={formData.candidateName}
                  onChange={(e) => setFormData(prev => ({ ...prev, candidateName: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Candidate Registration No. /  मनोनयनपत्र दर्ता नं.
                </label>
                <input
                  type="text"
                  value={formData.candidateRegNo}
                  onChange={(e) => setFormData(prev => ({ ...prev, candidateRegNo: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Political Party / Independent / राजनीतिक पार्टी / स्वतंत्र
                </label>
                <input
                  type="text"
                  value={formData.politicalParty}
                  onChange={(e) => setFormData(prev => ({ ...prev, politicalParty: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Grounds for Complaint */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Grounds for Complaint / उजुरीको आधार</h3>
            <p className="text-sm text-muted-foreground">Select one or multiple grounds: / एक वा अनेक कारण चुन्नुहोस्:</p>
            
            <div className="space-y-3 border border-border/30 rounded-lg p-4">
              {complaintGrounds.map((ground, index) => (
                <label key={index} className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.grounds.includes(ground)}
                    onChange={(e) => handleGroundChange(ground, e.target.checked)}
                    className="mt-1 w-4 h-4 text-primary border-border/30 rounded focus:ring-primary"
                  />
                  <span className="text-sm text-foreground">
                    <span className="font-medium">{index + 1}.</span> {ground}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Evidence Upload */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Upload className="w-5 h-5 text-primary" />
              Evidence Attached / संलग्न प्रमाण:
            </h3>
            
            <div className="border-2 border-dashed border-border/30 rounded-lg p-6 text-center">
              <input
                type="file"
                multiple
                accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.txt"
                onChange={handleFileUpload}
                className="hidden"
                id="evidence-upload"
              />
              <label
                htmlFor="evidence-upload"
                className="cursor-pointer flex flex-col items-center gap-2"
              >
                <Upload className="w-8 h-8 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Click to upload photos, videos, audio, or text files
                </span>
              </label>
              
              {formData.evidenceFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                  {formData.evidenceFiles.map((file, index) => (
                    <div key={index} className="text-xs text-foreground bg-muted/50 px-2 py-1 rounded">
                      {file.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Submission Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Submission Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Date / मिति
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Time / समय
                </label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Candidate/Representative of Candidate Name / उम्मेदवार/उम्मेदवारको प्रतिनिधिको नाम
                </label>
                <input
                  type="text"
                  value={formData.candidateRepName}
                  onChange={(e) => setFormData(prev => ({ ...prev, candidateRepName: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Petitioner Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Complainant Information / उजुरीकर्ताको विवरण
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name / नाम
                </label>
                <input
                  type="text"
                  value={formData.petitionerName}
                  onChange={(e) => setFormData(prev => ({ ...prev, petitionerName: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Voter Number / मतदाता परिचयपत्र नं.
                </label>
                <input
                  type="text"
                  value={formData.voterNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, voterNumber: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number / सम्पर्क फोन नं. / मोबाईल नं
                </label>
                <input
                  type="text"
                  value={formData.petitionerPhone}
                  onChange={(e) => setFormData(prev => ({ ...prev, petitionerPhone: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Signature (digital/handwritten)
                </label>
                <input
                  type="text"
                  value={formData.petitionerSignature}
                  onChange={(e) => setFormData(prev => ({ ...prev, petitionerSignature: e.target.value }))}
                  placeholder="Enter your signature or upload a signature file"
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Address / सम्पर्क ठेगाना:
                </label>
                <textarea
                  value={formData.petitionerAddress}
                  onChange={(e) => setFormData(prev => ({ ...prev, petitionerAddress: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-6 border-t border-border/30">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-border/30 text-foreground rounded-lg hover:bg-muted/50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Submit Complaint
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
