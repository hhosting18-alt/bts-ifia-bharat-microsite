export type Challenge = { code: string; title: string; question: string }
export type Sector = { id: string; title: string; short: string; color: string; challenges: Challenge[] }

export const sectors: Sector[] = [
  {
    id: '01', title: 'Water & Environment', short: 'WATER & ENVIRONMENT', color: '#164ec9', challenges: [
      { code: '001', title: 'Water Loss Reduction', question: 'What existing inventions or technologies can detect, prevent and reduce avoidable water loss across residential, agricultural and industrial systems?' },
      { code: '002', title: 'Water Quality Monitoring', question: 'What existing technologies can enable rapid, reliable and affordable detection of unsafe water at the point of use?' },
      { code: '003', title: 'Waste-to-Resource', question: 'What existing technologies can convert difficult-to-manage waste into useful materials, products or resources safely and efficiently?' },
      { code: '004', title: 'Environmental Monitoring', question: 'What existing technologies can enable rapid, reliable and affordable monitoring of air, soil, water or other environmental conditions to support timely action?' },
    ]
  },
  {
    id: '02', title: 'Agriculture & Food', short: 'AGRICULTURE & FOOD', color: '#5f8f00', challenges: [
      { code: '005', title: 'Post-Harvest Loss Reduction', question: 'What existing solutions can reduce losses during harvesting, storage, preservation, handling and transportation of food and agricultural products?' },
      { code: '006', title: 'Precision Agriculture', question: 'What existing technologies can make sensing, monitoring and data-driven agricultural management more affordable and practical for smaller farms?' },
    ]
  },
  {
    id: '03', title: 'Health, Biotech & Assistive Technology', short: 'HEALTH, BIOTECH & ASSISTIVE TECHNOLOGY', color: '#ec087c', challenges: [
      { code: '007', title: 'Point-of-Care Diagnostics', question: 'What existing inventions or technologies can bring reliable diagnostic testing closer to patients without dependence on sophisticated laboratory infrastructure?' },
      { code: '008', title: 'Remote Health Monitoring', question: 'What existing technologies can monitor people remotely and identify meaningful changes early enough to support timely intervention?' },
      { code: '009', title: 'Assistive Care & Independent Living', question: 'What existing inventions or technologies can improve mobility, communication, daily functioning, safety and independence for persons with disabilities and older adults?' },
      { code: '010', title: 'Biotechnology & Bioprocess Solutions', question: 'What existing biotechnology, bioprocessing or bio-based technologies can improve health, diagnostics, therapeutic development, manufacturing or resource-efficient biological production?' },
    ]
  },
  {
    id: '04', title: 'AI, Deep Tech & Robotics', short: 'AI, DEEP TECH & ROBOTICS', color: '#6d20d7', challenges: [
      { code: '011', title: 'Robotics for Hazardous Environments', question: 'What existing robotic or autonomous technologies can perform useful tasks in environments that are unsafe, inaccessible or difficult for people?' },
      { code: '012', title: 'Trustworthy AI', question: 'What existing technologies can improve the reliability, explainability, verification and safety of AI systems used in real-world applications?' },
    ]
  },
  {
    id: '05', title: 'Electronics, Semiconductors & Digital Infrastructure', short: 'ELECTRONICS, SEMICONDUCTORS & DIGITAL INFRASTRUCTURE', color: '#0a7eaa', challenges: [
      { code: '013', title: 'Energy-Efficient Computing', question: 'What existing technologies can deliver greater computing or AI performance while significantly reducing energy consumption?' },
      { code: '014', title: 'Semiconductor Resource Efficiency', question: 'What existing technologies can reduce energy, water, material or process requirements in semiconductor and advanced electronics manufacturing?' },
      { code: '015', title: 'Edge Technology', question: 'What existing technologies can deliver intelligent services close to the point of use when connectivity to central infrastructure is limited or unreliable?' },
    ]
  },
  {
    id: '06', title: 'Cybersecurity & Data', short: 'CYBERSECURITY & DATA', color: '#0c7b9a', challenges: [
      { code: '016', title: 'Affordable Cybersecurity', question: 'What existing technologies can provide effective cybersecurity protection to organisations with limited technical resources?' },
      { code: '017', title: 'Privacy-Preserving Technology', question: 'What existing technologies can enable useful data-driven services while protecting personal and sensitive information?' },
      { code: '018', title: 'Critical Infrastructure Protection', question: 'What existing technologies can detect, predict and respond to failures or threats affecting critical digital or physical infrastructure?' },
    ]
  },
  {
    id: '07', title: 'Electric Mobility & Batteries', short: 'ELECTRIC MOBILITY & BATTERIES', color: '#ff7200', challenges: [
      { code: '019', title: 'Battery Life & Safety', question: 'What existing technologies can improve battery performance, life, safety, diagnostics, recycling or second-life use?' },
      { code: '020', title: 'Accessible Mobility', question: 'What existing technologies can make transportation safer, more accessible and more efficient for vulnerable users?' },
    ]
  },
  {
    id: '08', title: 'Advanced Manufacturing & Materials', short: 'ADVANCED MANUFACTURING & MATERIALS', color: '#9e31e7', challenges: [
      { code: '021', title: 'Manufacturing Efficiency', question: 'What existing technologies can help manufacturers improve productivity, quality and resource efficiency without requiring disproportionately high investment?' },
      { code: '022', title: 'Predictive Maintenance', question: 'What existing technologies can detect equipment problems early and reduce unplanned downtime?' },
      { code: '023', title: 'Sustainable Materials', question: 'What existing materials technologies can replace resource-intensive or environmentally harmful materials while maintaining required performance?' },
      { code: '024', title: 'Industrial Safety', question: 'What existing technologies can reduce human exposure to hazardous, repetitive or physically demanding industrial tasks?' },
    ]
  },
  {
    id: '09', title: 'Horology', short: 'HOROLOGY', color: '#7d45d8', challenges: [
      { code: '025', title: 'Innovation & Originality', question: 'What existing inventions, technologies, materials or mechanisms can improve the performance, functionality or design of mechanical, electronic or hybrid horological products?' },
      { code: '026', title: 'Quality & Precision', question: 'What existing technologies can improve the precision, consistency, quality control and repeatability of horological components, movements and finished timepieces?' },
      { code: '027', title: 'Resource Efficiency & Sustainability', question: 'What existing technologies or processes can reduce material, energy and other resource consumption while improving the sustainability of horological manufacturing?' },
      { code: '028', title: 'Scalability & Manufacturability', question: 'What existing technologies or manufacturing solutions can be adapted, standardised and scaled for efficient production of horological components and products?' },
    ]
  }
]
