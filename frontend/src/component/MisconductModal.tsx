"use client";

import { useState } from "react";
import { X, Upload, FileText, User, Calendar, MapPin, AlertTriangle } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "jspdf-autotable";

interface MisconductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const electoralOffenseCategories = {
  voterRelated: {
    name: "Voter-Related Offenses / मतदाता सम्बन्धित कसुर",
    offenses: [
      "Voting without eligibility — Voting without having the legal right to vote. / मतदानको अधिकार बिना मतदान गरेको।",
      "Impersonation — Voting in another person's name or submitting a ballot in someone else's name. / अर्को मतदाताको नामको मतपत्र बुझिलिएको वा अर्काको नामबाट मतदान गरेको।",
      "Multiple Voting — Casting more than one vote in the same election. / एउटै निर्वाचनका लागि एउटै व्यक्तिले एकभन्दा बढी पटक मतदान गरेको।",
      "False Registration — Providing false information during voter registration. / मतदाता दर्ता गर्दा गलत विवरण बुझाएको।",
      "Voter Intimidation — Preventing or obstructing voters from reaching or entering a polling station. / मतदातालाई मतदान स्थलमा प्रवेश गर्न नदिन, बाटो छेक्ने वा मतदान केन्द्रमा मतदान गर्न कुनै किसिमले बाधा पुर्‍याएको।",
      "Breach of Ballot Secrecy — Showing or displaying a marked ballot, marking a ballot outside the designated secrecy area. / मतपत्रमा मत संकेत गरेपछि कसैलाई उक्त मतपत्र देखाएको, गोप्य मत संकेत स्थलबाहिरमा मत संकेत गरेको।",
      "Violation of Voting Procedure — Disregarding established voting procedures. / मतदान प्रक्रियाको उल्लङ्घन गरेको।",
      "Ballot Box Tampering — Placing anything other than an official ballot into the ballot box. / मतपत्र बाहेक अन्य वस्तु मतपेटिकाभित्र खसाल्नु वा राख्नु।",
      "Ballot Destruction — Damaging or destroying ballot papers. / मतपत्र बिगार्नु वा नष्ट गर्नु।",
      "Illegal Voting by Non-Nepali Citizens — Non-citizens participating in the vote. / गैर-नेपाली नागरिकले निर्वाचनमा मतदान गरेको।",
      "Unauthorized Presence in Counting Center — Entering the counting center without authorization. / उम्मेदवार, निर्वाचन प्रतिनिधि, मतगणना प्रतिनिधि वा आयोगले अनुमति दिएको व्यक्ति बाहेक अन्यले मतगणना स्थलमा प्रवेश गरेको।",
      "Tampering with Counting Materials — Damaging or interfering with vote-counting materials. / मतगणना सम्बन्धि सामाग्री बिगार्ने वा नोक्सान पुर्‍याउने।"
    ]
  },
  candidatePartyRelated: {
    name: "Candidate & Party-Related Offenses / उम्मेदवार तथा राजनीतिक दल सम्बन्धित कसुर",
    offenses: [
      "Campaign Code Violations — Breaching the Election Commission's Code of Conduct for campaigns. / अभियान आचार संहिता उल्लङ्घन।",
      "Exceeding Campaign Expenditure Limit — Spending more than the legally prescribed campaign expenditure limit. / अभियान खर्चको कानुनी सीमा नाघ्नु।",
      "False Declarations — Submitting false information or forged documents with nomination papers. / झुट्टा विवरण तथा कागजात सहित मनोनयन पत्र पेश गर्नु वा गराउनु।",
      "Bribery — Offering cash, goods, services or any inducement, or using threats, intimidation, or force to obtain or give a ballot. / नगद, जिन्सी, सेवा वा अन्य किसिमको प्रलोभन दिनु/दिनु मनजुर गर्नु वा डर, त्रास, धम्कि वा बल प्रयोग गरेर मत किन्ने।"
    ]
  },
  electionOfficialRelated: {
    name: "Election Official Offenses / निर्वाचन अधिकारी सम्बन्धित कसुर",
    offenses: [
      "Misconduct — Improper or unlawful behavior by election officials. / निर्वाचन कर्मचारीद्वारा अनुचित आचरण।",
      "Tampering with Results — Manipulating vote counts, results, or official records. / मत गणनामा छेड़छाड़ वा नतिजा/रेकर्डहरुमा हेरफेर गर्नु।",
      "Illegal Distribution of Ballots — Election officials providing ballot papers to persons who are not legitimate voters. / मतपत्र अनधिकृत व्यक्तिलाई दिने/वितरण गर्ने।",
      "Negligence — Failing to properly perform official duties. / दरिलो जिम्मेवारी पूरा नगर्ने / लापरवाही।",
      "Corruption — Accepting bribes (cash/goods/services) or engaging in other corrupt practices. / भ्रष्टाचार (नगद/जिन्सी/सेवा स्वीकार गर्ने वा अन्य भ्रष्ट आचरण)।"
    ]
  }
};

export default function MisconductModal({ isOpen, onClose }: MisconductModalProps) {
  const [formData, setFormData] = useState({
    // Basic Information
    constituencyNo: "",
    district: "",
    pollingStation: "",
    incidentDate: new Date().toISOString().split('T')[0],
    incidentTime: new Date().toTimeString().slice(0, 5),
    
    // Violator Information
    violatorName: "",
    violatorAddress: "",
    violatorOrganization: "",
    
    // Complaint Details
    briefDescription: "",
    selectedOffenseCategory: "",
    selectedOffenses: [] as string[],
    evidenceFiles: [] as File[],
    
    // Confidentiality
    keepConfidential: false,
    
    // Complainant Information
    complainantName: "",
    complainantSignature: "",
    voterIdNumber: "",
    complainantDate: new Date().toISOString().split('T')[0],
    
    // Additional Details
    witnesses: "",
    additionalInfo: "",
    regulationName: "",
    ruleNumber: ""
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      evidenceFiles: [...prev.evidenceFiles, ...files]
    }));
  };

  const handleCategoryChange = (category: string) => {
    setFormData(prev => ({
      ...prev,
      selectedOffenseCategory: category,
      selectedOffenses: [] // Reset offenses when category changes
    }));
  };

  const handleOffenseChange = (offense: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        selectedOffenses: [...prev.selectedOffenses, offense]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        selectedOffenses: prev.selectedOffenses.filter(o => o !== offense)
      }));
    }
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
            font-size: 12px;
            font-weight: bold;
          }
          .section {
            margin-bottom: 15px;
          }
          .subject {
            margin-top: 15px;
            text-align: center;
          }
          .complainant-details {
            text-align: right;
            margin-top: 40px;
            padding-top: 20px;
          }
          .complainant-details h3 {
            margin-bottom: 15px;
            font-size: 14px;
            font-weight: bold;
          }
          .complainant-details p {
            margin: 5px 0;
            font-size: 12px;
            line-height: 1.4;
          }
          .offense-list {
            margin-left: 15px;
          }
          .offense-list li {
            margin-bottom: 5px;
            font-size: 11px;
          }
          .offense-category {
            font-weight: bold;
            margin-top: 10px;
            margin-bottom: 5px;
          }
          .form-field {
            margin-bottom: 8px;
          }
          .form-label {
            font-weight: bold;
            margin-bottom: 2px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="main-content">
            <div class="header">
              <h1>चुनाव सम्बन्धि कसुरको उजुरी</h1>
            </div>
            
            <div class="section">
              <p><strong>श्री निर्वाचन आयोग/ निर्वाचन अधिकृत/ अनुगमकर्ता/ अनुगमन टोली/ मतदान अधिकृत</strong></p>
              <p class="subject"><strong>विषय: उजुरी सम्बन्धमा।</strong></p>
            </div>
            
            <div class="section">
              <p>मिति ${formData.incidentDate} मा हुने प्रतिनिधिसभा सदस्य निर्वाचनको सन्दर्भमा, देहायका क्रियाकलापहरु निर्वाचन आयोग ऐन, २०७३; मतदाता नामावली ऐन, २०७३; निर्वाचन (कसूर तथा सजाय) ऐन, २०७३; स्थानीय तह निर्वाचन ऐन, २०७४; ${formData.regulationName && formData.ruleNumber ? `तथा/वा ${formData.regulationName}को नियम ${formData.ruleNumber} को उल्लंघन भएको प्रमाणित हुन्छ।` : 'तथा/वा … नियमावलीको नियम … को उल्लंघन भएको प्रमाणित हुन्छ।'}</p>
              <p>म माथि उल्लिखित काम कारवाही तुरुन्त रोक्न र उल्लङ्घनकर्ताहरुविरुद्ध कानुनी कारबाही हुनु पर्ने अनुरोध गर्दछु।</p>
            </div>
            
            <div class="section">
              <p><strong>उजुरीको विवरण:</strong></p>
              
              <div class="form-field">
                <p class="form-label">क) उल्लङ्घनकर्ता / विपक्षीको नाम : ${formData.violatorName || '  _________________'}</p>
              </div>
              
              <div class="form-field">
                <p class="form-label">ख) ठेगाना / संलग्न संस्था / निकाय : ${formData.violatorAddress || '  _________________'}</p>
              </div>
              
              <div class="form-field">
                <p class="form-label">ग) उजुरीको संक्षिप्त व्यहोरा (मिति, स्थान र घटनाको संक्षिप्त विवरण सहित) : ${formData.briefDescription || '_________________'}</p>
              </div>
              
              <div class="form-field">
                <p class="form-label">घ) उजुरीयोग्य निर्वाचन सम्बन्धी कसुरका प्रकार:</p>
              </div>
            </div>
            
            <div class="section">
              ${formData.selectedOffenses.length > 0 ? `
                <div class="offense-list">
                  <p><strong>${electoralOffenseCategories[formData.selectedOffenseCategory as keyof typeof electoralOffenseCategories]?.name.split('/')[1]?.trim() || electoralOffenseCategories[formData.selectedOffenseCategory as keyof typeof electoralOffenseCategories]?.name}</strong></p>
                  ${formData.selectedOffenses.map((offense, index) => {
                    const nepaliOffense = offense.split('/')[1]?.trim() || offense;
                    return `<p>${index + 1}. ${nepaliOffense}</p>`;
                  }).join('')}
                </div>
              ` : '<p>कुनै कसुर छानिएको छैन।</p>'}
            </div>
            
            <div class="section">
              <div class="form-field">
                <p class="form-label">ङ) संलग्न प्रमाण (फोटो/भिडियो/अडियो) : ${formData.evidenceFiles.length > 0 ? formData.evidenceFiles.map(file => file.name).join(', ') : 'छैन'}</p>
              </div>
              
              <div class="form-field">
                <p class="form-label">च) परिचय गोप्य राख्ने अनुरोध: म, उजुरीकर्ता, मेरो परिचय गोप्य राख्न चाहन्छु। : ${formData.keepConfidential ? 'हो' : 'होइन'}</p>
              </div>
            </div>
          </div>
          
          <div class="complainant-details">
            <h3>उजुरीकर्ताको विवरण:</h3>
            <p><strong>दस्तखत :</strong> ${formData.complainantSignature || '_________________'}</p>
            <p><strong>नाम, थर :</strong> ${formData.complainantName || '_________________'}</p>
            <p><strong>मतदाता परिचयपत्र नं :</strong> ${formData.voterIdNumber || '_________________'}</p>
            <p><strong>मिति :</strong> ${formData.complainantDate || '_________________'}</p>
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
      pdf.save(`election_complaint_${formData.complainantName.replace(/\s+/g, '_')}_${formData.incidentDate}.pdf`);

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
    if (!formData.constituencyNo || !formData.district || !formData.briefDescription) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!formData.complainantName || !formData.voterIdNumber) {
      alert("Please fill in all required complainant information.");
      return;
    }

    if (!formData.selectedOffenseCategory || formData.selectedOffenses.length === 0) {
      alert("Please select offense category and at least one specific offense.");
      return;
    }

    try {
      // Generate and download PDF
      await generatePDF();
      
      // Show success message
      alert("Election complaint form generated and downloaded successfully!");
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
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            Report Election Misconduct
          </h2>
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
              Incident Information / घटना सम्बन्धी जानकारी
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Constituency No. / निर्वाचन क्षेत्र नं
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
                  Polling Station / मतदान केन्द्र
                </label>
                <input
                  type="text"
                  value={formData.pollingStation}
                  onChange={(e) => setFormData(prev => ({ ...prev, pollingStation: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Date of Incident / घटनाको मिति
                </label>
                <input
                  type="date"
                  value={formData.incidentDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, incidentDate: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Time of Incident / घटनाको समय
                </label>
                <input
                  type="time"
                  value={formData.incidentTime}
                  onChange={(e) => setFormData(prev => ({ ...prev, incidentTime: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Violator Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Violator Information / उल्लङ्घनकर्ताको जानकारी</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name of Violator / Respondent / उल्लङ्घनकर्ता / विपक्षीको नाम
                </label>
                <input
                  type="text"
                  value={formData.violatorName}
                  onChange={(e) => setFormData(prev => ({ ...prev, violatorName: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Organization / संस्था
                </label>
                <input
                  type="text"
                  value={formData.violatorOrganization}
                  onChange={(e) => setFormData(prev => ({ ...prev, violatorOrganization: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Address / Affiliated Organization / Institution / ठेगाना / संलग्न संस्था / निकाय
                </label>
                <textarea
                  value={formData.violatorAddress}
                  onChange={(e) => setFormData(prev => ({ ...prev, violatorAddress: e.target.value }))}
                  rows={2}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Complaint Description */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Complaint Description / उजुरीको विवरण</h3>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Brief Description of Complaint / उजुरीको संक्षिप्त व्यहोरा (include date, place, and a short account of the incident)
              </label>
              <textarea
                value={formData.briefDescription}
                onChange={(e) => setFormData(prev => ({ ...prev, briefDescription: e.target.value }))}
                rows={4}
                className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                placeholder="Please provide a detailed description of the incident including date, place, and circumstances..."
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Regulation Name / नियमावलीको नाम
                </label>
                <input
                  type="text"
                  value={formData.regulationName}
                  onChange={(e) => setFormData(prev => ({ ...prev, regulationName: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Enter regulation name..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Rule Number / नियम नं
                </label>
                <input
                  type="text"
                  value={formData.ruleNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, ruleNumber: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Enter rule number..."
                />
              </div>
            </div>
          </div>

          {/* Electoral Offenses Categories */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Categories of Electoral Offenses / उजुरीयोग्य निर्वाचन सम्बन्धी कसुरका प्रकार</h3>
            <p className="text-sm text-muted-foreground">Select offense category and specific offenses: / कसुर श्रेणी र विशिष्ट कसुरहरू चुन्नुहोस्:</p>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Offense Category / कसुर श्रेणी
              </label>
              <select
                value={formData.selectedOffenseCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                required
              >
                <option value="">Select Category / श्रेणी छान्नुहोस्</option>
                <option value="voterRelated">Voter-Related Offenses / मतदाता सम्बन्धित कसुर</option>
                <option value="candidatePartyRelated">Candidate & Party-Related Offenses / उम्मेदवार तथा राजनीतिक दल सम्बन्धित कसुर</option>
                <option value="electionOfficialRelated">Election Official Offenses / निर्वाचन अधिकारी सम्बन्धित कसुर</option>
              </select>
            </div>
            
            {formData.selectedOffenseCategory && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  {electoralOffenseCategories[formData.selectedOffenseCategory as keyof typeof electoralOffenseCategories]?.name}
                </h4>
                <div className="space-y-3 border border-border/30 rounded-lg p-4">
                  {electoralOffenseCategories[formData.selectedOffenseCategory as keyof typeof electoralOffenseCategories]?.offenses.map((offense, index) => (
                    <label key={index} className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.selectedOffenses.includes(offense)}
                        onChange={(e) => handleOffenseChange(offense, e.target.checked)}
                        className="mt-1 w-4 h-4 text-primary border-border/30 rounded focus:ring-primary"
                      />
                      <span className="text-sm text-foreground">
                        <span className="font-medium">{index + 1}.</span> {offense}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            
            {formData.selectedOffenses.length > 0 && (
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Selected Offenses / छानिएका कसुरहरू:</h4>
                <div className="space-y-1">
                  {formData.selectedOffenses.map((offense, index) => (
                    <p key={index} className="text-sm text-foreground">
                      {index + 1}. {offense.split('/')[0].trim()}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Evidence Upload */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Upload className="w-5 h-5 text-primary" />
              Evidence Attached / संलग्न प्रमाण (Photos / Videos / Audio)
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
                  Click to upload photos, videos, audio, or documents
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

          {/* Confidentiality Request */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Confidentiality Request / परिचय गोप्य राख्ने अनुरोध</h3>
            
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="keepConfidential"
                checked={formData.keepConfidential}
                onChange={(e) => setFormData(prev => ({ ...prev, keepConfidential: e.target.checked }))}
                className="w-4 h-4 text-primary border-border/30 rounded focus:ring-primary"
              />
              <label htmlFor="keepConfidential" className="text-sm text-foreground cursor-pointer">
                I, the complainant, request that my identity be kept confidential. / म, उजुरीकर्ता, मेरो परिचय गोप्य राख्न चाहन्छु।
              </label>
            </div>
          </div>

          {/* Complainant Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Complainant's Details / उजुरीकर्ताको विवरण
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name (First & Last) / नाम, थर
                </label>
                <input
                  type="text"
                  value={formData.complainantName}
                  onChange={(e) => setFormData(prev => ({ ...prev, complainantName: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Voter ID Number / मतदाता परिचयपत्र नं
                </label>
                <input
                  type="text"
                  value={formData.voterIdNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, voterIdNumber: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Signature / दस्तखत
                </label>
                <input
                  type="text"
                  value={formData.complainantSignature}
                  onChange={(e) => setFormData(prev => ({ ...prev, complainantSignature: e.target.value }))}
                  placeholder="Enter your signature"
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Date / मिति
                </label>
                <input
                  type="date"
                  value={formData.complainantDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, complainantDate: e.target.value }))}
                  className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Additional Information / अतिरिक्त जानकारी</h3>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Witnesses / साक्षीहरू
              </label>
              <textarea
                value={formData.witnesses}
                onChange={(e) => setFormData(prev => ({ ...prev, witnesses: e.target.value }))}
                rows={2}
                className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                placeholder="Names and contact information of any witnesses..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Any Additional Details / कुनै अतिरिक्त विवरण
              </label>
              <textarea
                value={formData.additionalInfo}
                onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                rows={3}
                className="w-full px-4 py-2 bg-input border border-border/30 rounded-lg focus:border-primary focus:outline-none"
                placeholder="Any other relevant information..."
              />
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
              className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Submit Election Complaint
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
