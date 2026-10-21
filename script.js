const exams = [
  { name: 'Full Length Exam', description: 'Full Length Exam', available: true, quiz: 'full' },
  { name: 'Basic Engineering Practice Quiz', description: 'Basic Engineering Practice Quiz', available: true, quiz: 'basic' },
  { name: 'Mechanical Attachments Quiz', description: 'Mechanical Attachments', available: true, quiz: 'mechanical' },
  { name: 'Mechanical Components and Assemblies Quiz', description: 'Mechanical Components and Assemblies Quiz', available: true, quiz: 'components' },
  { name: 'Mechanics of Materials Quiz', description: 'Mechanics of Materials Quiz', available: true, quiz: 'materials' },
  { name: 'Power Transmission Quiz', description: 'Power Transmission Quiz', available: true, quiz: 'transmission' },
  { name: 'Supportive Knowledge (Machine Design and Materials) Quiz', description: 'Supportive Knowledge (Machine Design and Materials) Quiz', available: true, quiz: 'supportive' }
];

let questions = [
  { id: '1701027', complexity: 'Easy', text: 'A piece of machinery has a purchase value of $12,000 and a salvage value of $2,000 after 5 years. Calculate the book value on year 4 using the straight-line method of depreciation, d = 15%.', choices: ['$4,000', '$2,000', '$10,000', '$2,400'], answer: 0, solution: 'Refer to the formula for the straight-line method in the NCEES PE Mechanical Reference Handbook: Economic Analysis: Depreciation. The question asks how much has yet to be depreciated after four years. Depreciation in each year is multiplied by four years, then subtracted from the initial cost.\n\nTherefore, answer A is correct.\n\nAnswer B is the annual depreciation amount.\n\nAnswer C is the total depreciation after four years.\n\nAnswer D neglects the salvage value.', formulas: ['Screenshots for development/Solutions/problem 1 image solution.svg'], reference: 'NCEES PE Mechanical Reference Handbook > Economic Analysis > Depreciation' },
  { id: '1701030', complexity: 'Medium', text: 'A W-beam is required to support a moment of 250 ft-kip. The beam must be equal to or less than 17 in tall. Using a factor of safety of 1.67, what is the lightest beam that may be used? Assume the beam is made of A992 material with yield strength of 50 ksi.', choices: ['W12 × 79', 'W14 × 68', 'W16 × 40', 'W16 × 67'], answer: 3, solution: 'Determine the section modulus required to support the moment (NCEES PE Mechanical Reference Handbook: Stress Analysis: Beams).\n\nLook up the structural properties in the NCEES PE Mechanical Reference Handbook: Structural Properties and find a beam that meets the requirements.\n\nA W16 × 67 beam is 16.3 in tall and has a section modulus of 117 in³. It is the lightest beam meeting the requirements given in the problem statement. A W16 × 40 beam has a section modulus less than 100.2, so it does NOT meet the design requirement. A W14 × 68 satisfies all design requirements but is heavier than a W16 × 67. A W12 × 79 satisfies all design requirements but is heavier than a W16 × 67 and a W14 × 68.', formulas: ['Screenshots for development/Solutions/problem 2 image solution.svg'], reference: 'NCEES PE Mechanical Reference Handbook > Structural Properties\nNCEES PE Mechanical Reference Handbook > Stress Analysis > Beams' },
  { id: '1701032', complexity: 'Easy', text: 'Steel slabs measuring 1,300 mm × 2,500 mm × 100 mm are used as test weights for the load testing of an overhead crane. Assume the slabs are made of structural steel with a density of 7,850 kg/m³. The crane has a rated capacity of 10 metric tonnes (10,000 kg) and must be load tested with a total test load between 100% and 110% of its rated capacity, in accordance with the applicable testing requirements. Determine the minimum whole number of steel slabs required to satisfy the load-test requirement.', choices: ['1', '4', '6', '8'], answer: 1, solution: 'Determine the mass of each deadweight. Mass is found in the NCEES PE Mechanical Reference Handbook: Properties of Materials: Material Properties.\n\nCalculate the load-test range.\n\nDetermine the required number of weights.\n\nCheck to ensure four weights are not too many.', formulas: ['Screenshots for development/Solutions/question 3 image solution 1.svg', 'Screenshots for development/Solutions/question 3 image solution 2.svg', 'Screenshots for development/Solutions/question 3 image solution 3.svg', 'Screenshots for development/Solutions/question 3 image solution 4.svg'], reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties' },
  { id: '1701038', complexity: 'Medium', text: 'What is the radius of gyration for a member with the below properties?\n\nArea = 11.7 in²\nHeight = 11.9 in\nIₓ = 307 in⁴\nSₓ = 51.5 in³\nZₓ = 57 in³', choices: ['26.2 in', '5.95 in', '5.12 in', '3.42 in'], answer: 2, solution: 'The radius of gyration is defined as the square root of the moment of inertia divided by the area.', formulas: ['Screenshots for development/Solutions/question 4 image solution.svg'], reference: 'NCEES PE Mechanical Reference Handbook > Mensuration of Areas and Volumes > Properties of Shapes' },
  { id: '20251200', complexity: 'Easy', text: 'What is this type of table typically used for?', image: 'Screenshots for development/Questions/Question 5 picture.png', choices: ['Failure tree analysis (FTA)', 'Risk assessment', 'Failure mode and effects analysis (FMEA)', 'Process improvement'], answer: 2, solution: 'This table is typically used for failure mode and effects analysis (FMEA). It organizes process steps, potential failure modes and effects, severity, occurrence, detection, risk-priority numbers, and recommended actions.', reference: 'Failure Mode and Effects Analysis (FMEA)' }
];

const basicQuestions = questions;
basicQuestions[0].blocks = [
  { text: 'Refer to the formula for the straight-line method in the NCEES PE Mechanical Reference Handbook: Economic Analysis: Depreciation. The question asks how much has yet to be depreciated after four years. Depreciation in each year is multiplied by four years, then subtracted from the initial cost:' },
  { formula: 'Screenshots for development/Solutions/problem 1 image solution.svg' },
  { text: 'Therefore, answer A is correct.\n\nAnswer B is the annual depreciation amount.\n\nAnswer C is the total depreciation after four years.\n\nAnswer D neglects the salvage value.' }
];
basicQuestions[1].blocks = [
  { text: 'Determine the section modulus required to support the moment (NCEES PE Mechanical Reference Handbook: Stress Analysis: Beams).' },
  { formula: 'Screenshots for development/Solutions/problem 2 image solution.svg' },
  { text: 'Look up the structural properties in the NCEES PE Mechanical Reference Handbook: Structural Properties and find a beam that meets the requirements.\n\nA W16 × 67 beam is 16.3 in tall and has a section modulus of 117 in³. It is the lightest beam meeting the requirements given in the problem statement. A W16×40 beam has a section modulus less than 100.2, so it does NOT meet the design requirement. A W14 × 68 satisfies all design requirements but is heavier than a W16 × 67. A W12 × 79 satisfies all design requirements but is heavier than a W16 × 67 and a W14 × 68.' }
];
basicQuestions[2].blocks = [
  { text: 'Determine the mass of each deadweight. Mass is found in the NCEES PE Mechanical Reference Handbook: Properties of Materials: Material Properties.' },
  { formula: 'Screenshots for development/Solutions/question 3 image solution 1.svg' },
  { text: 'Calculate the load-test range.' }, { formula: 'Screenshots for development/Solutions/question 3 image solution 2.svg' },
  { text: 'Determine the required number of weights.' }, { formula: 'Screenshots for development/Solutions/question 3 image solution 3.svg' },
  { text: 'Check to ensure four weights are not too many.' }, { formula: 'Screenshots for development/Solutions/question 3 image solution 4.svg' }
];
basicQuestions[3].blocks = [{ text: 'The radius of gyration is defined as the square root of the moment of inertia divided by the area.' }, { formula: 'Screenshots for development/Solutions/question 4 image solution.svg' }];

const mechanicalQuestions = [
  { id: '1704033', complexity: 'Medium', text: 'The nut on a ½ in diameter UNF grade 8 steel bolt is tightened 1.5 rotations from an initial un-stretched grip length of 20 in. What value is closest to the stress in the nominal area of the bolt? Ignore the stress concentrations for this calculation. Assume that E = 29,000,000 psi.', choices: ['85,000 psi', '109,000 psi', '120,000 psi', '168,000 psi'], answer: 1, blocks: [{ text: 'The table from the NCEES PE Mechanical Reference Handbook: Joints and Fasteners: Tension Connections-External Loads, states that for ½ in UNF bolts, the threads per in is 20. Calculate the pitch in in per thread:' }, { formula: 'Screenshots for development/Solutions for mechancial attachments/problem 1 image solution 1.svg' }, { text: 'elongation = nut turns × in per thread' }, { formula: 'Screenshots for development/Solutions for mechancial attachments/problem 1 image solution 2.svg' }, { formula: 'Screenshots for development/Solutions for mechancial attachments/problem 1 image solution 3.svg' }, { formula: 'Screenshots for development/Solutions for mechancial attachments/problem 1 image solution 4.svg' }, { text: 'From the NCEES PE Mechanical Reference Handbook: Strength of Materials: Uniaxial Loading and Deformation, we can find the equation for uniaxial loading and deformation:' }, { formula: 'Screenshots for development/Solutions for mechancial attachments/problem 1 image solution 5.svg' }, { formula: 'Screenshots for development/Solutions for mechancial attachments/problem 1 image solution 6.svg' }, { text: 'Reconfigure the equations to solve for stress:' }, { formula: 'Screenshots for development/Solutions for mechancial attachments/problem 1 image solution 7.svg' }, { formula: 'Screenshots for development/Solutions for mechancial attachments/problem 1 image solution 8.svg' }, { formula: 'Screenshots for development/Solutions for mechancial attachments/problem 1 image solution 9.svg' }], reference: 'NCEES PE Mechanical Reference Handbook > Strength of Materials > Uniaxial Loading and Deformation\nNCEES PE Mechanical Reference Handbook > Joints and Fasteners > Tension Connections-External Loads' },
  { id: '1707056', complexity: 'Medium', text: 'A 3/4-in UNC bolt is lubricated and torqued to 45 ft-lb. The bolt is then stressed in tension by an 8,000-lb load. If sensors on the bolt grip measure the bolt load as 9,000 lbf, which of the following is most nearly the joint coefficient?', choices: ['1/8', '1/4', '3/8', '5/8'], answer: 3, blocks: [{ text: 'Determine the preload from the torque equation:' }, { formula: 'Screenshots for development/Solutions for mechancial attachments/problem 2 image solution 1.svg' }, { formula: 'Screenshots for development/Solutions for mechancial attachments/problem 2 image solution 2.svg' }, { formula: 'Screenshots for development/Solutions for mechancial attachments/problem 2 image solution 3.svg' }, { text: 'Use the equation for resultant bolt load:' }, { formula: 'Screenshots for development/Solutions for mechancial attachments/problem 2 image solution 4.svg' }, { formula: 'Screenshots for development/Solutions for mechancial attachments/problem 2 image solution 5.svg' }, { formula: 'Screenshots for development/Solutions for mechancial attachments/problem 2 image solution 6.svg' }], reference: 'NCEES PE Mechanical Reference Handbook, Section 2.18.2 “Tension Connections—The External Load.”' },
  { id: '1707059', complexity: 'Easy', text: 'A polyimide-based adhesive is used to join two sheets of sheet aluminum. The joint has an overlap of 0.5 in. Assuming a minimum lap-shear strength, which of the following is the maximum shear stress per unit width that the joint can sustain?', choices: ['500 lb/in', '1,000 lb/in', '1,500 lb/in', '2,000 lb/in'], answer: 1, blocks: [{ text: 'The minimum lap-shear strength for polyimide adhesives is 2,000 lb/in². The maximum shear stress per unit width the joint can sustain is:' }, { formula: 'Screenshots for development/Solutions for mechancial attachments/problem 3 image solution 1.svg' }, { formula: 'Screenshots for development/Solutions for mechancial attachments/problem 3 image solution 2.svg' }, { formula: 'Screenshots for development/Solutions for mechancial attachments/problem 3 image solution 3.svg' }], reference: 'NCEES PE Mechanical Reference Handbook, Section 2.18.3 “Adhesives and Bonding.”' },
  { id: '20251042', complexity: 'Easy', text: 'Which of the following is a key advantage of using adhesives in mechanical design?', choices: ['High temperature resistance', 'Ability to bond dissimilar materials', 'Permanent connection', 'Ability to withstand high shear forces'], answer: 1, blocks: [{ text: 'Adhesives are particularly useful for joining materials that may be difficult to weld or braze, especially when bonding dissimilar materials.' }], reference: 'General Knowledge' },
  { id: '20251053', complexity: 'Easy', text: 'True or False: Dowel pins are commonly used in mechanical assemblies to allow easy disassembly of components.', choices: ['True', 'False'], answer: 1, blocks: [{ text: 'Dowel pins are primarily used to accurately align or locate components, not to facilitate disassembly. Although pins in general can be used for temporary connections, dowel pins are press-fit and not intended for repeated removal, making them more of a semi-permanent or alignment-focused fastener.' }], reference: 'General Knowledge' }
];
const componentsQuestions = [
  { id: '1705019', complexity: 'Medium', text: 'Four springs in parallel, each having a constant of 800 lb/in, are used to support a motor weighing 400 lb. The motor can only move in the vertical direction. The speed in RPM at which resonance will occur is most nearly:', choices: ['153', '530', '56', '94'], answer: 1, blocks: [{ text: 'The resonance speed is equal to the natural circular frequency ωₙ (in rpm) of the free vibration of the motor. It is calculated as:' }, { formula: 'Screenshots for development/Solutions for Mechanical Components and Assemblies/problem 1 image solution 1.svg' }, { formula: 'Screenshots for development/Solutions for Mechanical Components and Assemblies/problem 1 image solution 2.svg' }, { formula: 'Screenshots for development/Solutions for Mechanical Components and Assemblies/problem 1 image solution 3.svg' }, { text: 'Answer A results from failing to adjust the units on the spring stiffness to lbf/ft.\nAnswer C reports the angular velocity in rad/s instead of the requested RPM.\nAnswer D results from failure to reconcile the units of lbm and lbf before taking the square root.' }], reference: '' },
  { id: '1706032', complexity: 'Medium', text: 'The allowable normal stress (in psi) of A229 oil-tempered wire with a diameter of 0.125 inches is most nearly:', choices: ['169,157 psi.', '216,868 psi.', '2,135 psi.', '97,590 psi.'], answer: 0, blocks: [{ text: 'From the NCEES PE Mechanical Reference Handbook: Mechanical Components: Springs, A229 has the following properties:\n\nA = 147\n\nm = 0.187\n\nRefer to the NCEES PE Mechanical Reference Handbook: Mechanical Components: Springs for the tensile stress equation.' }, { formula: 'Screenshots for development/Solutions for Mechanical Components and Assemblies/problem 2 image solution 1.svg' }, { text: 'Refer to the NCEES PE Mechanical Reference Handbook: Mechanical Components: Springs for the allowable stress equation.' }, { formula: 'Screenshots for development/Solutions for Mechanical Components and Assemblies/problem 2 image solution 2.svg' }, { text: 'Therefore, answer A is correct.\n\nAnswer B reports Sᵤₜ.\nAnswer C is calculated using the wrong value of A from the table (the SI value).\nAnswer D reports the Sₛᵧ – yield strength in torsion, not tensile/normal yield strength.' }], reference: '' },
  { id: '1706077', complexity: 'Medium', text: 'A cylindrical pressure vessel has an inner radius of 8 in, an outer radius of 9 in, and a length of 40 in. If the cylinder is pressurized to 4,800 psi and the yield stress of the material is 40,000 psi, find the normal stress and circumferential stress at the inner surface of the cylinder.', choices: ['σᵣ = 4,800 psi; σθ = −4,094 psi', 'σᵣ = −4,800 psi; σθ = 40,941 psi', 'σᵣ = 2,700 psi; σθ = −2,084 psi', 'σᵣ = −2,700 psi; σθ = 2,084 psi'], answer: 1, blocks: ['1','2','3','4','5','6','7','8'].map(n=>({ formula: `Screenshots for development/Solutions for Mechanical Components and Assemblies/problem 3 image solution ${n}.svg` })), reference: '' },
  { id: '20251030', complexity: 'Easy', text: 'A mechanical system behaves like a spring–mass system and has a static deflection δₛₜ of 0.05 ft under its own weight. Assuming no damping, what is the natural frequency of vibration of the system?', choices: ['1.42 Hz', '2.25 Hz', '4.04 Hz', '5.47 Hz'], answer: 2, blocks: [{ text: 'Natural frequency:' }, { formula: 'Screenshots for development/Solutions for Mechanical Components and Assemblies/problem 4 image solution 1.svg' }, { text: 'Given:\n\nδₛₜ = 0.05 ft\ng = 32.2 ft/sec²' }, ...['2','3','4','5'].map(n=>({ formula: `Screenshots for development/Solutions for Mechanical Components and Assemblies/problem 4 image solution ${n}.svg` }))], reference: '' },
  { id: '20251202', complexity: 'Easy', text: 'What can be used to direct the flow of fluids and gases in pipes in an industrial setting?', choices: ['Control valve', 'Pressure-reducing valve', 'Ball valve', 'Socket valve'], answer: 0, blocks: [{ text: 'Control valves do just as their name suggests: control the flow of fluid or gases through a system. Pressure-reducing valves lower the pressure between the valve ends. Ball valves, a type of control valve, can function as shut-off or check valves, but are not typically suitable for gases.' }], reference: '' }
];
const materialsQuestions = [
  { id: '1702035', complexity: 'Medium', text: 'A torque is applied to a stepped steel shaft of length 4 m. If one section of the shaft is 1 m long with diameter 5 cm and the remaining length has a diameter of 10 cm, what is the angle of twist across the length of the shaft under a 2 kN-m loading?', choices: ['0.05 degrees', '0.2 degrees', '2.8 degrees', '7.1 degrees'], answer: 2, blocks: [{ formula: 'Screenshots for development/Solutions for Mechanics of Materials/Problem 1 image solution 1.svg' }, { formula: 'Screenshots for development/Solutions for Mechanics of Materials/Problem 1 image solution 2.svg' }, { text: 'G: shear modulus = 80 GPa for steel (NCEES PE Mechanical Reference Handbook: Properties of Materials: Material Properties)\n\nT: applied torque\n\nL: section length\n\nJ: polar modulus of inertia' }, ...['3','4','5','6','7'].map(n=>({formula:`Screenshots for development/Solutions for Mechanics of Materials/Problem 1 image solution ${n}.svg`}))], reference: 'NCEES PE Mechanical Reference Handbook > Stress Analysis > Torsion\nNCEES PE Mechanical Reference Handbook > Mensuration of Areas and Volumes > Properties of Shapes\nNCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties' },
  { id: '1703002', complexity: 'Medium', text: 'Determine the unknown material in which the cube of material, seen below, is the result of experiencing a shear stress of 1.86 Mpsi (where 5a = 6b = 2c).', image: 'Screenshots for development/Questions for Mechanics of Materials/problem 2 image.png', choices: ['Steel', 'Aluminum', 'Brass', 'Copper'], answer: 2, blocks: [{ text: 'The shear strain is the angle of deformation from the original right angle and can be calculated using the tangent and the known ratio of the triangle.\n\nγ = tan⁻¹(b/c)\n\n6b=2c, therefore, b/c=1/3 and γ=0.322\n\nγ=τ/G\n\nG = 1.86 Mpsi / 0.322 = 5.78 Mpsi\n\nRefer to Table 1 – NCEES PE Mechanical Reference Handbook: Properties of Materials: Material Properties\n\nThe material with the closest modulus of rigidity is brass with a value of 5.8 Mpsi.' }], reference: 'NCEES PE Mechanical Reference Handbook > Machine Design > Shear Stress - Strain\nNCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties' },
  { id: '1703020', complexity: 'Medium', text: 'A 1 in diameter 6061 aluminum rod that is 36 in long is placed between two supports, as shown in Figure 1. There is no gap between the rod ends and the support. The rod is at an ambient temperature of 65°F. What value is the closest to the temperature that the rod would need to be heated to for it to yield in compression? Assume that the rod is supported to prevent buckling.', image: 'Screenshots for development/Questions for Mechanics of Materials/problem 3 image figure 1.png', choices: ['100°F', '200°F', '350°F', '500°F'], answer: 2, blocks: [{ text: 'Using information from the NCEES PE Mechanical Reference Handbook: Properties of Materials: Typical Material Properties, we can find:\n\nE = 10,000,000 psi\n\nα = 13.1 × 10⁻⁶\n\nyield = 37,000 psi\n\nUsing information from the NCEES PE Mechanical Reference Handbook: Elements of Machine Design and Methodologies: Uniaxial Loading and Deformation, we can find:' }, ...['1','2','3','4','5','6','7','8','9','10','11','12'].map(n=>({formula:`Screenshots for development/Solutions for Mechanics of Materials/Problem 3 image solution ${n}.svg`}))], reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Typical Material Properties\nNCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Uniaxial Loading and Deformation\nNCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Thermal Deformations' },
  { id: '20251045', complexity: 'Easy', text: 'True or False: A material with a low modulus of elasticity will experience more elongation under the same axial load than a material with a high modulus.', choices: ['True', 'False'], answer: 0, blocks: [{ text: 'A low modulus of elasticity indicates that the material is more deformable, so it will elongate more under the same axial load compared to a material with a high modulus of elasticity.' }], reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Strength of Materials > Uniaxial Loading and Deformation. Topic: Axial Loading' },
  { id: '20251054', complexity: 'Easy', text: 'True or False: The bending stress in a beam is directly proportional to the distance from the neutral axis.', choices: ['True', 'False'], answer: 0, blocks: [{ text: 'Bending stress is proportional to the distance from the neutral axis, meaning the farther from the neutral axis, the greater the bending stress.' }], reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Stress Analysis > Beams > Stresses in Beams.' }
];
const transmissionQuestions = [
  {
    id: '1701037', complexity: 'Easy',
    text: 'What is the synchronous speed of a 4-pole, 230-V, 1∅, 60-Hz electric motor?',
    choices: ['3,600 rpm', '2,400 rpm', '1,800 rpm', '1,200 rpm'], answer: 2,
    blocks: [
      { formula: 'Screenshots for development/Solutions for Power Transmission/Problem 1 image solution 1.png' },
      { text: 'The number of poles and the frequency are the only variables in determining the synchronous speed of electric motors.' },
      { formula: 'Screenshots for development/Solutions for Power Transmission/problem 1 image solution 2.svg' },
      { text: 'The table on p. 81 of PEMRH may be used to determine the synchronous speed of electric motors. However, it should be noted that the table is only valid for motors operating on a 60-Hz power grid.' }
    ],
    reference: 'NCEES PE Mechanical Reference Handbook > Electrical Concepts of Motors > Synchronous Motor Speeds'
  },
  {
    id: '1706007', complexity: 'Medium',
    text: 'Which of the following options cannot be used to calculate the velocity ratio (VR) for a pair of gears?',
    choices: ['P<sub>pinion</sub>/P<sub>gear</sub>', 'r<sub>gear</sub>/r<sub>pinion</sub>', 'ω<sub>pinion</sub>/ω<sub>gear</sub>', 'n<sub>pinion</sub>/n<sub>gear</sub>'], answer: 0,
    blocks: [
      { text: 'The velocity ratio of a pair of gears can be defined as:' },
      { formula: 'Screenshots for development/Solutions for Power Transmission/problem 2 image solution 1.svg' },
      { text: 'The ratio of the pitch of the gears cannot be used to determine the velocity ratio.' }
    ], reference: ''
  },
  {
    id: '1706013', complexity: 'Medium',
    text: 'A belt drive is used to power a mechanical component on a tractor. If the flat urethane belt slips in its typical application, which of the following would NOT be a strategy to address this?',
    choices: ['Switch to timing belt configuration', 'Reconfigure to increase angle of wrap', 'Switch to a leather belt', 'Include a belt tensioner'], answer: 2,
    blocks: [{ text: 'Flat belt slip occurs when the frictional force between the belt and pulley is insufficient to transmit the required torque. Common strategies to reduce or eliminate slips focus on increasing frictional engagement or providing positive drive.\n\nA. Switch to a timing belt configuration - Valid strategy\n\nA timing belt provides positive engagement through teeth and does not rely on friction, effectively eliminating slip.\n\nB. Reconfigure to increase angle of wrap - Valid strategy\n\nIncreasing the wrap angle increases the contact area between the belt and pulley, improving frictional grip and reducing slip.\n\nD. Include a belt tensioner - Valid strategy\n\nA tensioner increases belt tension, thereby increasing the normal force at the pulley and thereby increasing the frictional capacity.\n\nC. Switch to a leather belt - NOT a valid strategy\n\nLeather belts generally have lower, less consistent friction coefficients than modern urethane belts, especially in outdoor or agricultural environments where moisture, temperature variation, and wear are present. Switching to leather would not reliably address slipping and may worsen it.' }], reference: ''
  },
  {
    id: '1706022', complexity: 'Medium',
    text: 'A gear set contains a spur pinion with the following properties:\n\nd = 6 in\nφ = 20°\n\nIf a torque of 2,500 in-lb is applied to the spur pinion, determine the total force on the spur gear tooth.',
    choices: ['833 lb', '416 lb', '886 lb', '303 lb'], answer: 2,
    blocks: [
      { formula: 'Screenshots for development/Solutions for Power Transmission/problem 4 image solution 1.svg' },
      { formula: 'Screenshots for development/Solutions for Power Transmission/problem 4 image solution 2.svg' },
      { formula: 'Screenshots for development/Solutions for Power Transmission/problem 4 image solution 3.svg' }
    ], reference: ''
  },
  {
    id: '1706086', complexity: 'Medium', multiple: true,
    text: 'All gears in the same gear train mesh must have the same __________. Select all that apply.',
    choices: ['diameter', 'pitch-line velocity', 'root fillet radius', 'diametral pitch', 'module', 'center-to-center distance'], answer: [1, 3, 4],
    blocks: [{ text: 'All gears must have the same diametral pitch to be able to mesh properly. Module is the inverse of diametral pitch and therefore must be the same. Pitch-line velocity must be the same or else gears will not mesh and surfaces in contact will not be at the same speed.' }],
    reference: 'NCEES PE Mechanical Reference Handbook, Section 2.16.5.2 "Involute Gear Tooth Nomenclature."'
  },
  { id: '1704014', complexity: 'Medium', text: 'Estimate the Goodman equivalent stress for a rod experiencing an alternating stress state of σmax = 20 ksi and σmin = -10 ksi. Assume the rod is made of A572 steel (Sy = 50 ksi, Su = 65 ksi) and there is a stress concentration factor of Kf = 1.5.', choices: ['15.0 ksi', '17.5 ksi', '25.4 ksi', '45 ksi'], answer: 2, blocks: [{ text: 'NCEES PE Mechanical Handbook: Elements of Machine Design and Methodologies: Variable Loading Failure Theories' }, { math: 'σ<sub>eq</sub> = <span class="fraction"><span>σ<sub>a</sub></span><span>1 − <span class="fraction"><span>σ<sub>m</sub></span><span>S<sub>ut</sub></span></span></span></span>' }, { text: 'The reader will need to recall the formula for alternating stress in fatigue and for the mean stress in fatigue:' }, { math: 'σ<sub>a</sub> = <span class="fraction"><span>σ<sub>max</sub> − σ<sub>min</sub></span><span>2</span></span>\n\nσ<sub>m</sub> = <span class="fraction"><span>σ<sub>max</sub> + σ<sub>min</sub></span><span>2</span></span>' }, { text: 'The stress concentration factor, Kf, needs to be applied to the nominal stresses in the fatigue scenario. Thus the reader should modify the above formulas to include the stress concentration:' }, { math: 'K<sub>f</sub>σ<sub>a</sub> = K<sub>f</sub><span class="fraction"><span>σ<sub>max</sub> − σ<sub>min</sub></span><span>2</span></span> and K<sub>f</sub>σ<sub>m</sub> = K<sub>f</sub><span class="fraction"><span>σ<sub>max</sub> + σ<sub>min</sub></span><span>2</span></span>. Thus: σ<sub>a</sub> = (1.5)<span class="fraction"><span>[20 ksi − (-10 ksi)]</span><span>2</span></span> = 22.5 ksi, and σ<sub>m</sub> = (1.5)<span class="fraction"><span>[20 ksi + (-10 ksi)]</span><span>2</span></span> = 7.5 ksi.' }, { text: 'Combining the results into the Goodman Equation yields:' }, { math: 'σ<sub>eq</sub> = <span class="fraction"><span>22.5 ksi</span><span>1 − <span class="fraction"><span>7.5 ksi</span><span>65 ksi</span></span></span></span> = 25.4 ksi' }], reference: 'NCEES PE Mechanical Handbook, V. 2.0 > Chapter 2, Machine Design and Materials, > 2.14 Variable Loading Failure Theories' },
  { id: '1704030', complexity: 'Medium', text: 'A rod of A36 steel is placed in tension. The rod is stretched until it reaches plastic deformation. If the rod was originally 5.00 in in length, what value is closest to the percent elongation just prior to yielding?', choices: ['0.05%', '0.12%', '0.5%', '1%'], answer: 1, blocks: [{ text: 'From NCEES PE Mechanical Reference Handbook: Strength of Materials: Uniaxial Loading and Deformation, we can find:' }, { math: 'σ = <span class="fraction"><span>P</span><span>A</span></span>\n\nδ = <span class="fraction"><span>PL</span><span>AE</span></span>' }, { text: 'From the NCEES PE Mechanical Reference Handbook: Properties of Materials: Material Properties, we can find the E and yield stress of A36:\n\nE = 29 × 10³ ksi\n\nσ<sub>y</sub> = 36 ksi\n\nUsing in the yield stress and modulus of elasticity as well as the equation from NCEES PE Mechanical Reference Handbook: Strength of Materials: Uniaxial Loading and Deformation, we can find' }, { math: 'δ = <span class="fraction"><span>PL</span><span>AE</span></span> = <span class="fraction"><span>σ</span><span>E</span></span>L\n\nδ = <span class="fraction"><span>36 ksi × 5.00 in</span><span>29 × 10³ ksi</span></span> = 0.0062 in\n\n<span class="fraction"><span>0.0062 in</span><span>5.00 in</span></span> × 100 = 0.12%' }, { text: 'Percent elongation is explained in the NCEES PE Mechanical Reference Handbook: Strength of Materials: Uniaxial Loading and Deformation.' }], reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties\nNCEES PE Mechanical Reference Handbook > Strength of Materials > Uniaxial Loading and Deformation' },
  { id: '1704032', complexity: 'Medium', text: 'A steel cable is attached to a wall and then run over a pulley, as shown in Figure 1. The length of the cable from the wall to the top of the pulley is 25 ft. The diameter of the pulley is 5 in. The cable diameter is 0.125 in. The weight is 300 lbf. What value is closest to the rotation of the pulley in degrees due to cable elongation? Assume that E = 29,000,000 psi.', image: 'Screenshots for development/Questions for full length exam/problem 13 picture.jpg', choices: ['2', '4', '6', '8'], answer: 2, blocks: [{ text: 'Using NCEES PE Mechanical Reference Handbook: Strength of Materials: Uniaxial Loading and Deformation we can find:' }, { math: 'σ = <span class="fraction"><span>P</span><span>A</span></span>\n\nσ = <span class="fraction"><span>300 lbf</span><span><span class="fraction"><span>π(0.125 in)²</span><span>4</span></span></span></span> = 24,446.2 psi\n\nδ = <span class="fraction"><span>PL</span><span>AE</span></span> = 24,446.2 psi × <span class="fraction"><span>300 in</span><span>29,000,000 psi</span></span> = 0.253 in' }, { text: 'Determine the rotation of the pulley by dividing the pulley circumference by elongation and multiplying it by 360° per rotation:\n\ncircumference = π D = π × 5 in = 15.7 in' }, { math: '<span class="fraction"><span>0.253 in</span><span>15.7 in</span></span> × <span class="fraction"><span>360°</span><span>1 rotation</span></span> = 5.8°' }], reference: 'NCEES PE Mechanical Reference Handbook > Strength of Materials > Uniaxial Loading and Deformation' },
  { id: '1704034', complexity: 'Medium', text: 'What value is closest to the force in lbf required to shear an ASTM A449 bolt that is 1 1/8 in in diameter through the unthreaded portion of the bolt? Assume that the max shear stress is 60% of the tensile strength.', choices: ['62,622', '71,568', '104,370', '119,280'], answer: 0, blocks: [{ text: 'The shear stress formula:' }, { math: 'τ = <span class="fraction"><span>F</span><span>A</span></span>\n\nA = πr² = π × (<span class="fraction"><span>1.125 in</span><span>2</span></span>)² = 0.994 in²' }, { text: 'From the table on page 207, we find the A449 tensile strength to be 105,000 psi. Thus: 0.6 × 105,000 psi = 63,000 psi\n\nF = 63,000 psi × 0.994 in² = 62,622 lbf\n\nF = 0.6 × 105,000 = 63,000' }], reference: 'NCEES PE Mechanical Reference Handbook, V1.9 > Chapter 2, Machine Design and Materials > Joints and Fasteners > Bolts' }
];
// Keep this completed quiz fixed at its original five questions. Full-exam work belongs below.
const fullLengthDraftQuestions = transmissionQuestions.splice(5);
const supportiveQuestions = [
  {
    id: '1701012', complexity: 'Medium',
    text: 'A factory has 25 samples taken of a cement-making process. Each sample had 9 items in it. The sum of the sample means is 125.48 lb, and the sum of the sample ranges is 8.21 lb. Which of the following lists the UCL and LCL of the average chart?',
    choices: ['5.13; 4.91', '13.23; 3.19', '133.69; 117.27', '130.50; 120.46'], answer: 0,
    blocks: [
      { text: 'First begin by determining the Xbar and Rbar needed for the UCL and LCL.\n\nRefer to NCEES PE Mechanical Reference Handbook: Statistical Quality Control.' },
      ...['1', '2', '3', '4', '5', '6'].map(number => ({ formula: `Screenshots for development/Solutions for  Supportive Knowledge/Problem 1 image solution ${number}.svg` })),
      { text: 'Determine A₂ from NCEES PE Mechanical Reference Handbook: Statistical Quality Control.\n\nSample size is 9, so A₂ = 0.34.\n\nCalculate the ULL and LLL:\n\nRefer to NCEES PE Mechanical Reference Handbook: Statistical Quality Control.' },
      ...['7', '8', '9', '10', '11', '12'].map(number => ({ formula: `Screenshots for development/Solutions for  Supportive Knowledge/Problem 1 image solution ${number}.svg` }))
    ], reference: 'NCEES PE Mechanical Reference Handbook > Statistical Quality Control'
  },
  {
    id: '1703006', complexity: 'Medium',
    text: 'Consider that 304 stainless steel with an α+Fe₃C (carbide) composition is manufactured with 0.018% carbon by weight. If a sample of the 304SS is heated until it melts, and is then air-cooled, at what temperature does α-Fe (ferrite) begin to form?',
    choices: ['1333°F', '1610°F', '1674°F', '2640°F'], answer: 0,
    blocks: [
      { text: 'As the steel described cools, it reaches the alpha-ferrite line at approximately 1333°F when in line with 0.018% Carbon along the x-axis of the figure below.' },
      { image: 'Screenshots for development/Solutions for  Supportive Knowledge/problem 2 image solution 1.png' }
    ], reference: 'NCEES PE Mechanical Handbook V1.9, Chapter 2: Machine Design and Materials, 2.9 Material Properties, 2.9.9 Binary Phase Diagram, 2.9.9.1 Leve Rule'
  },
  {
    id: '1703026', complexity: 'Medium', multiple: true,
    text: 'Which of these mechanical properties can be directly measured by a torsion test? Select all that apply.',
    choices: ['Bulk modulus', 'Elastic modulus', 'Poisson’s ratio', 'Shear modulus', 'Tensile strength', 'Shear strength'], answer: [3, 5],
    blocks: [{ text: 'Solution:\n\n• Bulk modulus is measured directly from a hydrostatic loading or a confined uniaxial loading.\n• Elastic modulus and Poisson’s ratio can be measured directly from a uniaxial tensile loading.\n• Shear modulus can be measured as a simple ratio of torque to angle of twist in a torsion test.\n• Tensile strength can be measured as the failure tensile stress of a uniaxial tension test.\n• Shear strength can be measured as the failure shear stress of a torsion test.' }], reference: ''
  },
  {
    id: '1708001', complexity: 'Medium',
    text: 'A 100-in long composite I-beam is subject to uniform pressure of 250 psi on its top face and is fixed on both ends. A stress analyst needs to conduct deflection analysis in finite element analysis (FEA) software. The analyst took advantage of symmetrical boundary conditions on a quarter symmetric model of the I-beam. The analyst decided to model the beam using 3D brick (solid) elements rather than shell elements. What boundary and loading conditions accurately represent the quarter symmetric I-beam?',
    image: 'Screenshots for development/Questions for Supportive Knowledge/picture for problem 4.jpg',
    choices: ['Face 1: U1, UR2, UR3 = 0; Face 2: U3, UR1, UR2 = 0; Face 3: U1, U2, U3, UR1, UR2, UR3 = 0; pressure: 62.5 psi', 'Face 1: U1 = 0; Face 2: U3 = 0; Face 3: U1, U2, U3 = 0; pressure: 62.5 psi', 'Face 1: U1, UR2, UR3 = 0; Face 2: U3, UR1, UR2 = 0; Face 3: U1, U2, U3, UR1, UR2, UR3 = 0; pressure: 250 psi', 'Face 1: U1 = 0; Face 2: U3 = 0; Face 3: U1, U2, U3 = 0; pressure: 250 psi'], answer: 3,
    blocks: [{ text: 'Three-dimensional solid elements do not have rotational stiffness and are not required to have torque and moment restraints. Due to quarter symmetric nature, force and area are both divided by ¼. Hence, the pressure stays the same since P = F/A.' }], reference: ''
  },
  {
    id: '1708011', complexity: 'Easy',
    text: 'Which of the following non-destructive evaluation (NDE) methods best fits the following description:\n\nMechanical vibrations are induced via a piezoelectric transducer. The transducer needs to be in contact with the workpiece (an adhesion gel may be applied on the surface prior to contact.) The mechanical vibrations propagate waves through the workpiece. The waves are then either reflected or scattered due to internal defects. The results can be interpreted and shown on a screen or a meter.',
    choices: ['Magnetic particle testing (MPT)', 'Eddy-current testing (ECT)', 'Ultrasonic testing (UT)', 'Liquid penetrant testing (PT)'], answer: 2,
    blocks: [{ text: 'Magnetic particle testing is performed by using magnetic powder or magnetic fluorescent particles. A strong magnetic field is applied to the workpiece and the magnetic powder/particles accumulate at the defect sites.\n\nEddy-current testing uses an alternating current to induce electron flow into the workpiece. The defects interrupt the flow of the current.\n\nUltrasonic testing uses a piezoelectric transducer to transmit mechanical vibrations and detect the wave interference patterns due to internal defects.\n\nLiquid penetrant testing uses a dye and developer to help bring out surface flaws on a workpiece.' }], reference: ''
  }
];
const fullLengthQuestions = [
  {
    id: '01704041', complexity: 'Medium',
    text: 'A hollow rod has an inner radius, r₁, and an outer radius, r₂. If r₁ = r₂/2, what percentage of torque can the shaft carry in comparison to a solid shaft with the same outer diameter?',
    choices: ['27%', '55%', '78%', '94%'], answer: 3,
    blocks: [
      { text: 'Torsional stress:' },
      { formula: 'Screenshots for development/Solutions for full length exam/problem 1 image solution 1.svg' },
      { formula: 'Screenshots for development/Solutions for full length exam/problem 1 image solution 2.svg' },
      { text: 'Hollow shaft:' },
      { formula: 'Screenshots for development/Solutions for full length exam/problem 1 image solution 3.svg' },
      { formula: 'Screenshots for development/Solutions for full length exam/problem 1 image solution 4.svg' },
      { formula: 'Screenshots for development/Solutions for full length exam/problem 1 image solution 5.svg' }
    ], reference: ''
  },
  {
    id: '1701011', complexity: 'Medium',
    text: 'A pipe company has a process producing pipe couplings. Couplings must meet the following specification: Diameter 0.75 in +/- 0.005 in. Five samples of five couplings each are taken from the production line and the results are shown below. Determine how many samples fall outside the control limits of the average chart.',
    image: 'Screenshots for development/Questions for full length exam/problem 2 picture.jpg',
    choices: ['0', '1', '2', '3'], answer: 2,
    blocks: [
      { text: 'First begin by determining the Xbar and Rbar needed for the ULL and LLL.\n\nRefer to the NCEES PE Mechanical Reference Handbook: Statistical Quality Control.' },
      ...['1', '2', '3', '4', '5'].map(number => ({ formula: `Screenshots for development/Solutions for full length exam/problem 2 image solution ${number}.svg` })),
      { text: 'Determine A₂ from NCEES PE Mechanical Reference Handbook: Statistical Quality Control.\n\nSample size is 5, so A₂ = 0.58.\n\nCalculate the ULL and LLL:\n\nRefer to NCEES PE Mechanical Reference Handbook: Statistical Quality Control.' },
      ...['6', '7', '8', '9', '10', '11'].map(number => ({ formula: `Screenshots for development/Solutions for full length exam/problem 2 image solution ${number}.svg` })),
      { text: 'Sample 4 and 5 are outside the limits.' }
    ], reference: 'NCEES PE Mechanical Reference Handbook > Statistical Quality Control'
  },
  {
    id: '1701013', complexity: 'Medium',
    text: 'For the sample data set shown, the median and standard deviation are, most nearly:',
    image: 'Screenshots for development/Questions for full length exam/problem 3 picture.png',
    choices: ['5.164; 0.0792', '5.136; 0.0776', '5.136; 0.0792', '5.164; 0.0776'], answer: 0,
    blocks: [
      { text: 'The median is the middle number of the set when it is organized in sequential order. There are 25 samples total, find the 13th number:' },
      { formula: 'Screenshots for development/Solutions for full length exam/problem 3 image solution 1.svg' },
      { text: 'This is not the same as the mean.\n\nFor sample standard deviation, first calculate the mean:' },
      { math: 'X̄ = <span class="fraction"><span>1</span><span>n</span></span>ΣXᵢ\n\nX̄ = <span class="fraction"><span>5.246 + 5.224 + … + 5.176 + 5.179</span><span>25</span></span>\n\nX̄ = 5.136.' },
      { text: 'Next calculate the sample standard deviation.' },
      { math: 's = √[<span class="fraction"><span>1</span><span>n − 1</span></span>Σ(Xᵢ − X̄)²]\n\ns = √[<span class="fraction"><span>(5.246 − 5.136)² + (5.224 − 5.136)² + … + (5.176 − 5.136)² + (5.179 − 5.136)²</span><span>25 − 1</span></span>]\n\ns = 0.0792' }
    ], reference: ''
  },
  {
    id: '1701025', complexity: 'Easy',
    text: 'Failure will occur when a principal stress equals the strength of the material when using which of the following?',
    choices: ['Coulomb-Mohr Theory', 'Distortion-Energy Theory', 'Maximum-Shear-Stress Theory', 'Maximum-Normal-Stress Theory'], answer: 3,
    blocks: [{ text: 'Refer to definitions of failure theories in the NCEES PE Reference Handbook > Chapter 2, Failures, Theories, 2.13, Ductile materials, 2.13.2' }], reference: ''
  },
  {
    id: '1703013', complexity: 'Medium',
    text: 'A steel bar with a diameter of 2.0 in and a length of 18 in is mounted between two rigid walls as shown below. The coefficient of thermal expansion is 6.5 × 10⁻⁶ in/(in × °F) and E = 30 × 10⁶ psi. The bar was installed at a temperature of 68° F. The temperature of the bar is raised to 350° F. The stress in the steel bar at the higher temperature is most nearly:',
    image: 'Screenshots for development/Questions for full length exam/problem 5 picture.png',
    choices: ['55,000 psi', '65,000 psi', '75,000 psi', '85,000 psi'], answer: 0,
    blocks: [
      { math: 'Delta = δt = αL(T − T₀)' },
      { text: '[deformation caused by temperature change = temperature coefficient of expansion × length of member (final temp − initial temp)]' },
      { math: 'Delta = (6.5 × 10⁻⁶) × 18 in (350 − 68) = 0.033 in' },
      { text: 'Stress = force/area' },
      { text: 'Delta = force × length/(E × area)' },
      { mathml: '<math><mrow><mi>δ</mi><mo>=</mo><mfrac><mrow><mi>P</mi><mi>L</mi></mrow><mrow><mi>A</mi><mi>E</mi></mrow></mfrac></mrow></math>' },
      { text: 'Stress = delta × E/length' },
      { mathml: '<math><mrow><mi>σ</mi><mo>=</mo><mfrac><mrow><mi>δ</mi><mi>E</mi></mrow><mi>L</mi></mfrac></mrow></math>' },
      { mathml: '<math><mrow><mi>Stress</mi><mo>=</mo><mfrac><mrow><mn>0.033</mn><mtext> in</mtext><mo>×</mo><mn>30</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup><mtext> psi</mtext></mrow><mn>18</mn><mtext> in</mtext></mfrac><mo>=</mo><mn>55,000</mn><mtext> psi</mtext></mrow></math>' },
      { text: 'NCEES PE Mechanical Reference Handbook, V2.0>Chapter 2: Machine Design and Materials, > 2.10.6 Thermal\n\nNCEES PE Mechanical Reference Handbook, V2.0>Chapter 2: Machine Design and Materials, > 2.10.5 Uniaxial Loading and Deformation' }
    ], reference: 'NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Strength of Materials'
  },
  {
    id: '1703028', complexity: 'Medium',
    text: 'An aluminum strut is positioned between two rigid walls at 300°F. As the system cools to 70°F, what is the stress in the strut?',
    choices: ['30 ksi (tensile)', '30 ksi (compressive)', '54 ksi (tensile)', '54 ksi (compressive)'], answer: 0,
    blocks: [{ text: 'Concept: Cooling causes thermal contraction; thermal strain balanced with mechanical strain\n\nYoung’s Modulus\nE = 10000 ksi' }, { math: 'Coefficient of thermal expansion α = 13.1 × 10⁻⁶ <span class="fraction"><span>1</span><span>degF</span></span>' }, { math: 'Thermal strain: εₜ = αΔT = α × (T<sub>f</sub> − T<sub>i</sub>) = 13.1 × 10⁻⁶ <span class="fraction"><span>1</span><span>degF</span></span> × (70 degF − 300 degF) = −3.013 × 10⁻³\n\nTotal strain: ε = ε<sub>mech</sub> + εₜ = 0\n\nε<sub>mech</sub> = −εₜ = 3.013 × 10⁻³\n\nStress: σ = Eε<sub>mech</sub> = 10000 ksi × 3.013 × 10⁻³ = 30.13 ksi' }, { text: 'The positive magnitude indicates tension. The strut would naturally shrink, but is mechanically extended to remain in its original position.' }],
    reference: 'NCEES PE Mechanical Handbook > Properties of Materials > Thermal Properties\nNCEES PE Mechanical Handbook > Properties of Materials > Material Properties'
  },
  {
    id: '1703034', complexity: 'Easy',
    text: 'Which of the following describes the property of a material that corresponds with a material’s ability to withstand environmental attack and decay?',
    choices: ['Corrosion resistance', 'Capacitance', 'Thermal conductivity', 'Density'], answer: 0,
    blocks: [{ text: 'Capacitance is the charge-carrying capacity of an insulating material. Thermal conductivity is how well a material conducts heat. Density is the mass per unit volume of a material. Therefore, corrosion resistance is correct.' }], reference: ''
  },
  {
    id: '1703035', complexity: 'Easy',
    text: 'Which of the following describes the property of a material that corresponds with susceptibility to being plastically deformed by applying pressure?',
    choices: ['Toughness', 'Strength', 'Resilience', 'Malleability'], answer: 3,
    blocks: [{ text: 'Toughness is related to a material’s ability to withstand occasional high stresses without fracturing. Strength is a material’s ability to withstand an applied force. Resilience is a material’s ability to absorb and release strain energy without permanent deformation. Therefore, malleability is correct.' }], reference: ''
  },
  {
    id: '1703036', complexity: 'Easy',
    text: 'Which type of material is able to absorb and release strain energy without permanent deformation?',
    choices: ['Resilient', 'Ductile', 'Tough', 'Brittle'], answer: 0,
    blocks: [{ text: 'Ductile materials will deform and elongate. Tough materials are able to withstand occasional hard stresses without fracturing. Brittle materials can only support a small amount of strain before failure. Therefore, resilient is correct.' }], reference: ''
  },
  {
    id: '1704005', complexity: 'Medium',
    text: 'A long column that is fixed to the ceiling is pinned at the ground in a way that restricts rotation of the column at the ground about the y axis, while there is free rotation about the pin and x axis. What is the ratio of the cross-sectional dimensions b:h that would satisfy the condition that a critical load P would theoretically allow for both buckling in the x or buckling in the y with the same magnitude of force?',
    image: 'Screenshots for development/Questions for full length exam/problem 10 picture.png', choices: ['1.2', '1.4', '1.6', '2.2'], answer: 1,
    blocks: [{ text: 'If we consider buckling in the y direction, the column can be considered fixed-pinned.' }, { math: '(K<sub>y</sub> = 0.7)  with  I<sub>y</sub> = <span class="fraction"><span>hb³</span><span>12</span></span>' }, { text: 'And when considering buckling in the x, we have fixed-fixed.' }, { math: '(K<sub>x</sub> = 0.5)  with  I<sub>x</sub> = <span class="fraction"><span>bh³</span><span>12</span></span>' }, { text: 'The equation for the critical load that causes buckling is seen below:' }, { math: 'P<sub>cr</sub> = <span class="fraction"><span>π²EI</span><span>(KL)²</span></span>' }, { text: 'Setting the critical force equal for both conditions yields the following equation:' }, { math: '<span class="fraction"><span>π²EI<sub>x</sub></span><span>(K<sub>x</sub>L)²</span></span> = <span class="fraction"><span>π²EI<sub>y</sub></span><span>(K<sub>y</sub>L)²</span></span> , which simplifies further to <span class="fraction"><span>bh³</span><span>K<sub>x</sub>²</span></span> = <span class="fraction"><span>hb³</span><span>K<sub>y</sub>²</span></span>\n\n(<span class="fraction"><span>b</span><span>h</span></span>)² = (<span class="fraction"><span>K<sub>y</sub></span><span>K<sub>x</sub></span></span>)²' }, { text: 'Substituting in the effective length factor’s yields a solution of b/h = 0.7/0.5 = 1.4' }], reference: ''
  }
];
fullLengthQuestions.push(...fullLengthDraftQuestions);
fullLengthQuestions.push(
  {id:'1704035',complexity:'Medium',text:'A shaft transfers power from a motor to a gear-set. An engineer is concerned about the shear strength of the shaft. Which modifications, holding all else constant, would increase the safety factor of the design? Select all that apply.',choices:['Decrease the applied torque','Decrease the shaft radius','Make the shaft hollow, with the same area','Change the shaft to be square section of same area'],answer:[0,2],blocks:[{text:'Concept: Determine safety factor as function of torque (T) and geometry'},{math:'Shear stress  τ = <span class="fraction"><span>Tr</span><span>J</span></span>\n\nSF = <span class="fraction"><span>S<sub>us</sub></span><span>τ</span></span> = <span class="fraction"><span>S<sub>us</sub>J</span><span>Tr</span></span>\n\nPolar moment of inertia  J = <span class="fraction"><span>π</span><span>2</span></span> × (r<sub>o</sub><sup>4</sup> − r<sub>i</sub><sup>4</sup>)'},{text:'Solid circular section, J in terms of area:'},{math:'A = πr²\nr = √(A/π)\nJ = <span class="fraction"><span>π</span><span>2</span></span>r⁴ = <span class="fraction"><span>π</span><span>2</span></span>(A/π)² = <span class="fraction"><span>A²</span><span>2π</span></span>\nτ = <span class="fraction"><span>Tr</span><span>A²/(2π)</span></span> = <span class="fraction"><span>2πTr</span><span>A²</span></span> = <span class="fraction"><span>2T√(π)</span><span>A<sup>3/2</sup></span></span>\nSF = <span class="fraction"><span>S<sub>us</sub>A<sup>3/2</sup></span><span>2√(π)T</span></span> = 0.2821 <span class="fraction"><span>S<sub>us</sub>A<sup>3/2</sup></span><span>T</span></span>'},{text:'• Decreasing the applied torque would increase the safety factor.\n• Decreasing the shaft radius would decrease the polar moment of inertia and, therefore, decrease the safety factor.\n• Making the shaft hollow with the same area would increase the polar moment of inertia and, therefore, increase the safety factor.'},{text:'Example: Thin-walled shaft with thickness t = r/10, same area'},{math:'A = 2πrt = <span class="fraction"><span>2π</span><span>10</span></span>r² = <span class="fraction"><span>π</span><span>5</span></span>r²\nr = √(5A/π)\nJ = <span class="fraction"><span>π</span><span>2</span></span> × (r⁴ − (0.9r)⁴) = 1.368 A²\nSF = 1.085 <span class="fraction"><span>S<sub>us</sub>A<sup>3/2</sup></span><span>T</span></span>'},{text:'• Turning the shaft into a square section of the same area would decrease the ratio of polar moment of inertia to an extreme radius (J/r) and, thus, decrease the safety factor.\n\nComparison of square section, side length l, same area:'},{math:'A = l²\nl = √A\nJ = <span class="fraction"><span>l⁴</span><span>6</span></span> = <span class="fraction"><span>A²</span><span>6</span></span>\n\nFurthest distance from centroid to part of cross-section: r = l√2/2\n\nτ = <span class="fraction"><span>T(l√2/2)</span><span>A²/6</span></span> = <span class="fraction"><span>6T√2</span><span>A<sup>3/2</sup></span></span>\nSF = 0.2357 <span class="fraction"><span>S<sub>us</sub>A<sup>3/2</sup></span><span>T</span></span>'},{text:'Square cross-section has a smaller safety factor.'}],reference:'NCEES PE Mechanical Reference Handbook > Stress Analysis > Torsion'},
  {id:'1704042',complexity:'Medium',text:'A hollow cylinder has a length of 6 in. The inner and outer radius are 1.5 in and 3 in, respectively, and it is twisted by a torque of 2,000 lb-in. Given shear modulus G = 11,000 psi, what is the angle of twist?',choices:['0.0091°','0.091°','0.523°','1.646°'],answer:2,blocks:[{math:'φ = TL/(GJ) = (2,000 lb-in × 6 in) / [11,000 lb/in² × π(3⁴ − 1.5⁴) in⁴ / 2] = 0.0091456 rad'},{text:'Convert the answer from radians to degrees:'},{math:'φ = 0.0091456 rad × 180°/π = 0.523°'}],reference:'NCEES PE Mechanical Handbook > Chapter 2: Machine Design and Material > Torsional Strain'},
  {id:'1704043',complexity:'Medium',text:'A simply supported beam with a cross-section shows a concentrated load F = 10 kN at its center. What is most nearly the maximum bending stress in the beam?',image:'Screenshots for development/Questions for full length exam/problem 17 picture.png',choices:['2,500 kPa','2,800 kPa','3,200 kPa','3,500 kPa'],answer:2,blocks:[{math:'R<sub>A</sub> = 5 kN\nR<sub>B</sub> = 5 kN\nM<sub>max</sub> = 5 kN × 2 = 10 kN-m'},{text:'Moment of inertia around the cross-section, I:'},{math:'I<sub>xx</sub> = 1/12(200)(500³) − 2[1/12(200−30)²(500−25×2)³] = 792 × 10⁶ mm⁴\nσ = Mc/I<sub>xx</sub> = 10 kN-m × 0.25 m / 0.000792 m⁴ = 3,156 ≈ 3,200 kPa'}],reference:''},
  {id:'1705017',complexity:'Medium',text:'A mass and spring are hung from a base plate that can induce vibration. The mass is 6 kg and the spring has a constant of 400 N/m. If the frequency ratio of the system is 0.65 when the base induces a vibration, the maximum amplitude of the force transmitted to the weight is most nearly:',choices:['33 N','102 N','63 N','85 N'],answer:1,blocks:[{text:'Given: m = 6 kg; k = 400 N/m; frequency ratio r = ω/ωₙ = 0.65. Damping not mentioned → assume undamped.'},{math:'x<sub>s</sub> = W/k = mg/k = 6 × 9.81/400 = 0.147 m\nF<sub>0</sub> = kx<sub>s</sub> = 400 × 0.147 = 58.8 N\nF<sub>T</sub>/F<sub>0</sub> = 1/|1−r²| = 1/(1−0.65²) = 1.731\nF<sub>T</sub> = 58.8 × 1.731 = 101.7 N ≈ 102 N'}],reference:'“Vibration Transmissibility, Base Motion” and “Springs” in the NCEES PE Mechanical Reference Handbook'},
  {id:'1705025',complexity:'Medium',text:'What is the natural frequency, ω, of a torsional vibrating system?',choices:['k/I','√(k/I)','I/k','√(I/k)'],answer:1,blocks:[{text:'Natural frequency is calculated using the following equation:'},{math:'ω<sub>n</sub> = √(k/I)'}],reference:''}
);

// Preserve the nested, vertical fraction layout used in the original Question 15 solution.
fullLengthQuestions.push({id:'1705027',complexity:'Medium',text:'A mass of 0.025 kg is hanging from a spring. The spring constant is 0.44 N/m. If the mass is pulled down and released, what will be the period of oscillation?',choices:['0.668 sec','0.357 sec','1.5 sec','2.03 sec'],answer:2,blocks:[{math:'&omega; = &radic;(<span class="fraction"><span>k</span><span>m</span></span>) = &radic;(<span class="fraction"><span>0.44</span><span>0.025</span></span>) = 4.195 rad/sec\n\n&omega; = 2&pi;F\n\nF = <span class="fraction"><span>4.195</span><span>2&pi;</span></span> = 0.668 Hz\n\nF = <span class="fraction"><span>1</span><span>T</span></span>\n\nT = <span class="fraction"><span>1</span><span>F</span></span> = <span class="fraction"><span>1</span><span>0.668</span></span> = 1.5 sec'}],reference:''});
const fullQuestion15 = fullLengthQuestions.find(question => question.id === '1704035');
fullLengthQuestions.push({ id:'1705026', complexity:'Medium', text:'A hollow stainless-steel shaft (G = 11.5 × 10⁶ psi) is under torsion. The shaft is 100 in long, has an inner diameter of 1 in, and has a wall thickness of 0.0625 in. What is the equivalent spring constant of the shaft?', choices:['6,794 lb/in','7,745 lb/in','5,752 lb/in','8,153 lb/in'], answer:0, blocks:[{text:'Solution: Determine the outer diameter.'},{math:'D = d + 2t = 1.125 in'},{text:'Determine the spring constant.'},{math:'k<sub>eq</sub> = <span class="fraction"><span>&pi;G</span><span>32L</span></span>(D<sup>4</sup> &minus; d<sup>4</sup>)\n\n<span class="fraction"><span>&pi; &times; 11.5 &times; 10<sup>6</sup> psi</span><span>32 &times; 100 in</span></span>[(1.125 in)<sup>4</sup> &minus; (1 in)<sup>4</sup>] = 6,794 lb/in'}], reference:'NCESS PE Mechanical Handbook 1.9, 2 Machine Design and Materials, 2.15.19 Equivalent Masses, Spring, and Dampers' });
const question20Index = fullLengthQuestions.findIndex(question => question.id === '1705026');
const question21Index = fullLengthQuestions.findIndex(question => question.id === '1705027');
if (question20Index > question21Index) [fullLengthQuestions[question20Index], fullLengthQuestions[question21Index]] = [fullLengthQuestions[question21Index], fullLengthQuestions[question20Index]];
fullLengthQuestions.push({id:'1705028',complexity:'Medium',text:'A spring has K = 10 kN/m and supports a block of mass of 5 kg. The mass is pulled down 8 mm and then released. What is the period of vibration?',choices:['7.1 sec','1.4 sec','0.14 sec','44.72 sec'],answer:2,blocks:[{math:'&omega; = &radic;(<span class="fraction"><span>k</span><span>m</span></span>) = (&radic;10 &times; <span class="fraction"><span>&radic;1,000</span><span>&radic;5</span></span>) = 44.72 rad/sec\n\nT = <span class="fraction"><span>2&pi;</span><span>&omega;</span></span>\n\nT = <span class="fraction"><span>2&pi;</span><span>44.72</span></span> = 0.14 sec'}],reference:''});
fullLengthQuestions.push({id:'1706008',complexity:'Medium',text:'A 10-hp motor running at 3,000 rpm drives a single-plate clutch with an outside diameter of 10 in and an inside diameter of 2 in. The plate has friction material on both sides, and the friction coefficient is 0.45. Assuming uniform wear, the axial clamping force required to transmit the motor’s full power is most nearly:',choices:['50 lbf','75 lbf','100 lbf','150 lbf'],answer:1,blocks:[{text:'First calculate shaft output torque of the motor.'},{math:'HP = <span class="fraction"><span>T &times; n</span><span>63,025</span></span>\n\n10 hp = <span class="fraction"><span>T &times; 3,000 rpm</span><span>63,025</span></span>\n\nT = 210.083 in-lb'},{text:'Use input torque to determine force via the clutch equation.\n\nHowever, a single-plate clutch actually has two friction interfaces, which is why n = 2 appears in the torque equation. The clutch plate is sandwiched between the flywheel and the pressure plate, creating two contact surfaces transmitting torque.'},{image:'Screenshots for development/Solutions for full length exam/question 23 solution picture.png'},{math:'Transmission Side\nT = <span class="fraction"><span>F&mu;</span><span>4</span></span>(D + d) &times; n\n\n210.083 in-lb = <span class="fraction"><span>F &times; 0.45</span><span>4</span></span>(10 in + 2 in) &times; 2\n\nF = 77.5 lb'}],reference:'NCEES PE Mechanical Handbook > Mechanical Components > Clutches and Brakes\nNCEES PE Mechanical Handbook > Mechanical Components > Belts, Pulleys, and Chain Drives'});
fullLengthQuestions.push({id:'1706011',complexity:'Medium',text:'A journal bearing has a journal diameter of 6 in and a length of 5 in. The bushing hole diameter is 6.01 in. The lubricant is SAE grade 60 oil at 150° F. The shaft is carrying 1,800 lbf and rotates at 1,000 rpm. The coefficient of friction is most nearly which of the following?',choices:['0.001','0.016','0.033','0.065'],answer:2,blocks:[{text:'Coefficient of friction equation:'},{math:'f = 2&pi;<sup>2</sup><span class="fraction"><span>&mu;N</span><span>P</span></span><span class="fraction"><span>r</span><span>c</span></span>'},{text:'First calculate the load per unit of projected area P. Journal diameter is given as 6 in, so journal radius is half that at 3 in.'},{math:'P = <span class="fraction"><span>F</span><span>2rl</span></span> = <span class="fraction"><span>1,800 lbf</span><span>2 &times; 3 in &times; 5 in</span></span> = 60 psi'},{text:'Next convert the shaft speed from rpm to rps:'},{math:'1,000 <span class="fraction"><span>rev</span><span>min</span></span> &times; <span class="fraction"><span>1 min</span><span>60 sec</span></span> = 16.667 <span class="fraction"><span>rev</span><span>sec</span></span>'},{text:'Determine absolute viscosity of SAE 60 oil at 150°F. From the Oil Viscosity Temperature Chart, the SAE 60 line is most closely intersected at 150°F at: 10μ,reyns = 10 × 10⁻⁶ reyns. Determine radial clearance c.'},{math:'c = <span class="fraction"><span>D &minus; d</span><span>2</span></span> = R &minus; r\n\nc = <span class="fraction"><span>6.01 in &minus; 6 in</span><span>2</span></span> = 0.005 in\n\nf = 2&pi;<sup>2</sup><span class="fraction"><span>10 &times; 10<sup>&minus;6</sup> reyns &times; 16.667 rps</span><span>60 psi</span></span><span class="fraction"><span>3 in</span><span>0.005 in</span></span>\n\nf = 0.033'}],reference:'NCEES PE Mechanical Reference Handbook > Properties of Materials > Engine Oil Viscosity Classification and Properties\nNCEES PE Mechanical Reference Handbook: Joints and Fasteners: Bolts\nNCEES PE Mechanical Handbook > Mechanical Components > Bearings'});
fullLengthQuestions.push({id:'1706025',complexity:'Medium',text:'A square key with side dimensions of 0.3 in and a length of 2 in is to be used to key a gear onto a 1.5-in-diameter shaft. If the shaft and key are made of the same material, having an allowable shear stress of 9,500 psi, determine the torque that is transmitted by the key.',choices:['4,275 in-lb','4,340 in-lb','6,550 in-lb','3,020 in-lb'],answer:0,blocks:[{math:'S<sub>s</sub> = <span class="fraction"><span>&tau;</span><span>bLr</span></span>'},{text:'Where: τ = torque\n\nr = radius\n\nb = side length of key\n\nL = length of key'},{math:'&tau; = L &times; r &times; b &times; S<sub>s</sub> = 2 in &times; 0.75 in &times; 0.3 in &times; 9,500 psi = 4,275 inlb'}],reference:''});
fullLengthQuestions.push({id:'1706031',complexity:'Medium',text:'A 2-4 Acme-threaded power screw is operated with the following parameters: d_major = 2.00 in, d_minor = 1.72 in, number of starts = 1, and lead = 0.25 in/rev. What is the minimum coefficient of friction for this power screw to be self-locking?',choices:['0.05','0.10','0.15','0.30'],answer:0,blocks:[{text:'For a power screw to be self-locking, the coefficient of friction must be at least the tangent of the helix angle.'},{math:'d<sub>m</sub> = <span class="fraction"><span>d<sub>major</sub> + d<sub>minor</sub></span><span>2</span></span> = <span class="fraction"><span>2.00 + 1.72</span><span>2</span></span> = 1.86 in\n\ntan &lambda; = <span class="fraction"><span>lead</span><span>&pi;d<sub>m</sub></span></span> = <span class="fraction"><span>0.25</span><span>&pi;(1.86)</span></span> = 0.0428\n\n&mu;<sub>min</sub> = tan &lambda; &asymp; 0.05'}],reference:''});
fullLengthQuestions.push({id:'1706034',complexity:'Easy',text:'An electrical motor rated for 20 amps and 240 volts has an electrical motor efficiency of 85%. The mechanical motor output in watts is most nearly:',choices:['2,000 W','3,800 W','4,080 W','4,800 W'],answer:2,blocks:[{text:'Electrical input power is:'},{math:'P<sub>in</sub> = VI = 240 V &times; 20 A = 4,800 W\n\nP<sub>out</sub> = &eta;P<sub>in</sub> = 0.85 &times; 4,800 W = 4,080 W'}],reference:''});
fullLengthQuestions.push({id:'1706036',complexity:'Easy',text:'A direct current 5-hp motor with 95% efficiency draws 10 amps at full load. The motor voltage is most nearly:',choices:['120 volts','180 volts','300 volts','390 volts'],answer:3,blocks:[{text:'Convert mechanical output power to watts and divide by efficiency to obtain electrical input power:'},{math:'P<sub>out</sub> = 5 hp &times; 746 <span class="fraction"><span>W</span><span>hp</span></span> = 3,730 W\n\nP<sub>in</sub> = <span class="fraction"><span>P<sub>out</sub></span><span>&eta;</span></span> = <span class="fraction"><span>3,730 W</span><span>0.95</span></span> = 3,926 W\n\nV = <span class="fraction"><span>P<sub>in</sub></span><span>I</span></span> = <span class="fraction"><span>3,926 W</span><span>10 A</span></span> = 392.6 V &asymp; 390 volts'}],reference:''});
fullLengthQuestions.push({id:'1706037',complexity:'Medium',text:'A two-sided clutch must be designed to fit inside a 10 in diameter housing. The inner diameter of the clutch is limited to 3 in. The clutch axial force is applied on each side by six springs that have an equivalent spring constant of 300 lb/in. When the clutch is engaged, the springs are compressed 0.6 in from their free length. What value is closest to the maximum torque that the clutch can support? Assume uniform pressure and a friction coefficient of 0.3 for the clutch plate.',choices:['190 in-lb','320 in-lb','380 in-lb','641 in-lb'],answer:3,blocks:[{text:'Determine the spring force and the mean friction radius for uniform pressure.'},{math:'F = 6(300 lb/in)(0.6 in) = 1,080 lb\n\nr<sub>m</sub> = <span class="fraction"><span>2</span><span>3</span></span><span class="fraction"><span>r<sub>o</sub><sup>3</sup> &minus; r<sub>i</sub><sup>3</sup></span><span>r<sub>o</sub><sup>2</sup> &minus; r<sub>i</sub><sup>2</sup></span></span>\n\nT = &mu;Fr<sub>m</sub> = 641 in-lb'}],reference:''});
fullLengthQuestions.push({id:'1706038',complexity:'Medium',text:'The brake caliper shown in Figure 1 must generate sufficient braking torque to resist a 55 ft-lb torque at one wheel. The brake disk has an inner friction radius of 4 in. and an outer friction radius of 9 in. The brake lining has a coefficient of friction of 0.42, and uniform wear is assumed. Determine the hydraulic pressure required in the pistons to produce the braking torque.',image:'Screenshots for development/Questions for full length exam/problem 30 picture.jpg',choices:['137 psi','70 psi','140 psi','280 psi'],answer:1,blocks:[{text:'The brake must resist a torque of:'},{math:'T = 55 ft-lb(12) = 660 in-lb\n\nr<sub>m</sub> = <span class="fraction"><span>r<sub>o</sub> + r<sub>i</sub></span><span>2</span></span> = <span class="fraction"><span>9 + 4</span><span>2</span></span> = 6.5 in\n\nF = <span class="fraction"><span>T</span><span>&mu;r<sub>m</sub></span></span> = <span class="fraction"><span>660</span><span>(0.42)(6.5)</span></span> = 241.76 lbf\n\nA<sub>p</sub> = 2[<span class="fraction"><span>&pi;(1.5)<sup>2</sup></span><span>4</span></span>] = 3.534 in<sup>2</sup>\n\np &asymp; 70 psi'}],reference:'NCEES PE Mechanical Reference Handbook. V2.0 > Elements of Machine Design and Methodologies > Belts Pulley and Chain'});
fullLengthQuestions.push({id:'1706041',complexity:'Medium',text:'A 10 hp motor running at 3300 rpm has a 50-tooth gear with a 5 in pitch diameter and ½ in width mounted to the output shaft. Assuming a Lewis form factor of 0.4, what value is closest to the maximum bending stress in the gear tooth?',choices:['1,000 psi','1,900 psi','3,800 psi','4,500 psi'],answer:2,blocks:[{math:'T = <span class="fraction"><span>HP &times; 63,025</span><span>rpm</span></span> = <span class="fraction"><span>10 &times; 63,025</span><span>3,300</span></span> = 191 in-lb\n\nW<sub>t</sub> = <span class="fraction"><span>2T</span><span>d</span></span> = <span class="fraction"><span>2(191)</span><span>5</span></span> = 76.4 lbf\n\nP<sub>d</sub> = <span class="fraction"><span>N</span><span>d</span></span> = <span class="fraction"><span>50</span><span>5</span></span> = 10\n\n&sigma; = <span class="fraction"><span>W<sub>t</sub>P<sub>d</sub></span><span>FY</span></span> = <span class="fraction"><span>(76.4)(10)</span><span>(0.5)(0.4)</span></span> = 3,820 psi &asymp; 3,800 psi'}],reference:''});
fullLengthQuestions.push({id:'1706044',complexity:'Medium',text:'A steel shaft with a diameter of 4 inches has a yield stress of 56,000 psi. A key will be fabricated from a 7/8-inch square steel stock, which has a yield stress of 75,000 psi. The allowable shear stress is specified as half of the material’s yield stress. What is the necessary length of the key to ensure its strength matches that of the shaft? Use a safety factor of 1.2 (in shear)?',choices:['3.7 in','6.5 in','8.9 in','9.8 in'],answer:1,blocks:[{math:'&tau;<sub>shaft</sub> = <span class="fraction"><span>0.5(56,000)</span><span>1.2</span></span>\n\nT = <span class="fraction"><span>&tau;&pi;d<sup>3</sup></span><span>16</span></span>\n\n&tau;<sub>key</sub> = <span class="fraction"><span>0.5(75,000)</span><span>1.2</span></span>\n\nL = <span class="fraction"><span>T</span><span>&tau;<sub>key</sub>br</span></span> &asymp; 6.5 in'}],reference:''});
fullLengthQuestions.push({id:'1706057',complexity:'Easy',text:'A small sprocket with 13 teeth drives a 1-in Type A roller chain at 150 rpm. What is the horsepower rating for the roller chain?',choices:['5.8','7.52','5.32','6.77'],answer:1,blocks:[{text:'Refer to the roller-chain horsepower-rating table for a 1-in Type A roller chain. At 150 rpm with a 13-tooth small sprocket, the tabulated horsepower rating is 7.52 hp.'}],reference:'NCEES PE Mechanical Reference Handbook > Mechanical Components > Chain Drives'});
fullLengthQuestions.push({id:'1706058',complexity:'Medium',text:'Steam at a pressure of 2.25 N/m² is generated in a thin-walled cylindrical pressure vessel. The diameter of the vessel is 1.6 m. If the circumferential stress is 56 Pa, then the minimum wall thickness is:',choices:['12 mm','25 mm','33 mm','41 mm'],answer:2,blocks:[{text:'For a thin-walled cylindrical pressure vessel, circumferential stress is:'},{math:'&sigma;<sub>h</sub> = <span class="fraction"><span>pD</span><span>2t</span></span>\n\nt = <span class="fraction"><span>pD</span><span>2&sigma;<sub>h</sub></span></span> = <span class="fraction"><span>(2.25 MPa)(1.6 m)</span><span>2(56 MPa)</span></span> = 0.0321 m &asymp; 33 mm'}],reference:''});
fullLengthQuestions.push({id:'1706060',complexity:'Medium',text:'A pipe delivers 3,600 m³ of steam per hour at a velocity of 40 m/s. The inside diameter of pipe is most nearly:',choices:['150 mm','180 mm','190 mm','210 mm'],answer:1,blocks:[{math:'Q = <span class="fraction"><span>3,600 m<sup>3</sup></span><span>hr</span></span> &times; <span class="fraction"><span>1 hr</span><span>3,600 sec</span></span> = 1 m<sup>3</sup>/s\n\nQ = vA = v<span class="fraction"><span>&pi;D<sup>2</sup></span><span>4</span></span>\n\nD = &radic;(<span class="fraction"><span>4Q</span><span>&pi;v</span></span>) = &radic;(<span class="fraction"><span>4(1)</span><span>&pi;(40)</span></span>) = 0.178 m &asymp; 180 mm'}],reference:''});
fullLengthQuestions.push({id:'1706061',complexity:'Medium',text:'A helical spring with square and ground ends has 19 coils and a shear modulus of elasticity of 11.5 × 10⁶ psi. If the outside diameter of the spring is 3.9 in and the wire diameter is 0.35 in, how much deflection will the spring have under a load of 85 lb?',choices:['4.8 in','2.3 in','3 in','3.6 in'],answer:2,blocks:[{math:'N<sub>a</sub> = 19 &minus; 2 = 17\n\nD = 3.9 &minus; 0.35 = 3.55 in\n\n&delta; = <span class="fraction"><span>8FD<sup>3</sup>N<sub>a</sub></span><span>Gd<sup>4</sup></span></span> = <span class="fraction"><span>8(85)(3.55)<sup>3</sup>(17)</span><span>(11.5 &times; 10<sup>6</sup>)(0.35)<sup>4</sup></span></span> = 3.0 in'}],reference:''});
fullLengthQuestions.push({id:'1706069',complexity:'Medium',text:'A 120° journal bearing has a 7-in diameter, an 11-in length, and a radial clearance of 0.006 in. The lubricating fluid is SAE 10 oil with a viscosity of 2.2 × 10⁻⁶ lb-s/in², and the bearing carries a load of 72 psi at 1,100 rpm. What is the bearing frictional torque using Petroff’s equation?',choices:['112 in-lbf','145 in-lbf','125 in-lbf','131 in-lbf'],answer:2,blocks:[{math:'N = 1,100 <span class="fraction"><span>rev</span><span>min</span></span> = 18.33 <span class="fraction"><span>rev</span><span>s</span></span>'},{text:'Petroff’s equation:'},{math:'T = <span class="fraction"><span>4&pi;<sup>2</sup>r<sup>3</sup>L&mu;N</span><span>c</span></span> = <span class="fraction"><span>(4&pi;<sup>2</sup>)(3.5 in)<sup>3</sup>(11 in)(2.2 &times; 10<sup>&minus;6</sup>)(18.33 <span class="fraction"><span>rev</span><span>s</span></span>)</span><span>0.006</span></span> = 125.138 in-lbf'}],reference:''});
const fullQuestion26 = fullLengthQuestions.find(question => question.id === '1706031');
if (fullQuestion26) fullQuestion26.blocks = [{text:'A power screw is self-locking if tan θ ≤ f.'},{math:'L = &pi;d<sub>m</sub> tan θ'},{text:'Rearrange the equation and solve for tan θ.'},{math:'tan θ = <span class="fraction"><span>L</span><span>&pi;d<sub>m</sub></span></span>'},{text:'Calculate d<sub>m</sub>.'},{math:'d<sub>m</sub> = <span class="fraction"><span>d<sub>major</sub> + d<sub>minor</sub></span><span>2</span></span> = <span class="fraction"><span>2.00 in + 1.72 in</span><span>2</span></span> = 1.86 in'},{text:'Solve the above equation.'},{math:'tan θ = <span class="fraction"><span>0.25 in</span><span>&pi; &times; 1.86 in</span></span> = 0.043 &asymp; 0.05'}];
if (fullQuestion26) fullQuestion26.reference='NCEES PE Mechanical Reference Handbook > Mechanical Components > Power Screws';
const fullQuestion27 = fullLengthQuestions.find(question => question.id === '1706034');
if (fullQuestion27) fullQuestion27.blocks = [{text:'Use equations for electrical power to determine motor power output\n\n[Section 1.10.7.2, power, p. 82]'},{math:'P = IV\n\nP = 20 amp &times; 240 volt\n\nP = 4800 watts'},{text:'Convert the motor output to mechanical power.\n\n[PE Mechanical Reference Handbook 2.0, Section 1.10.7, pg. 87]'},{math:'&eta;<sub>mech</sub> = <span class="fraction"><span>P<sub>mech</sub></span><span>P<sub>elec</sub></span></span>\n\nP<sub>mech</sub> = 0.85 &times; 4800 watts\n\nP<sub>mech</sub> = 4080 watts'}];
const fullQuestion28 = fullLengthQuestions.find(question => question.id === '1706036');
if (fullQuestion28) fullQuestion28.blocks = [{text:'It should be known that DC motors are only single phased and the power factor of a DC motor is 100%. Therefore, we can use equations from the NCEES PE Mechanical Reference Handbook: Electrical Concepts of Motors: Torques.'},{math:'I<sub>amps</sub> = <span class="fraction"><span>P<sub>hp</sub>(746)</span><span>V&eta;(pf)</span></span>\n\n10 amp = <span class="fraction"><span>5 hp(746)</span><span>V0.95(1)</span></span>\n\nV = <span class="fraction"><span>5 hp(746)</span><span>(10 amp)(0.95)(1)</span></span>\n\nV = 392.63 volts'}];
if (fullQuestion28) fullQuestion28.reference='NCEES PE Mechanical Reference Handbook > Electrical Concepts of Motors > Torques';
const fullQuestion29 = fullLengthQuestions.find(question => question.id === '1706037');
if (fullQuestion29) {
  fullQuestion29.answer = 2;
  fullQuestion29.blocks = [
    {text:'First, determine the axial force into the clutch plate using “Spring Energy” from the NCEES PE Mechanical Reference Handbook: Mechanical Components: Springs.'},
    {math:'F<sub>s</sub> = kx'},
    {math:'F<sub>s</sub> = (300 <span class="unit">lb/in</span>)(0.6 <span class="unit">in</span>)'},
    {math:'F<sub>s</sub> = 180 <span class="unit">lb</span>'},
    {text:'Next, determine the torque output of the friction surface using “Clutches and Brakes” from the NCEES PE Mechanical Reference Handbook: Mechanical Components: Clutches and Brakes.'},
    {math:'T = <span class="fraction"><span>Ff</span><span>3</span></span> &times; <span class="fraction"><span>D<sup>3</sup> - d<sup>3</sup></span><span>D<sup>2</sup> - d<sup>2</sup></span></span>'},
    {math:'T = <span class="fraction"><span>(180 <span class="unit">lb</span>)(0.3)</span><span>3</span></span> &times; <span class="fraction"><span>(10 <span class="unit">in</span>)<sup>3</sup> - (3 <span class="unit">in</span>)<sup>3</sup></span><span>(10 <span class="unit">in</span>)<sup>2</sup> - (3 <span class="unit">in</span>)<sup>2</sup></span></span>'},
    {math:'T = 192.46 <span class="unit">in-lb</span>'},
    {text:'The clutch is two-sided, so the torque must be multiplied by the number of friction surfaces.'},
    {math:'T<sub>F</sub> = T &times; n'},
    {math:'T<sub>F</sub> = (192.46 <span class="unit">in-lb</span>)(2 <span class="unit">sides</span>)'},
    {math:'T<sub>F</sub> = 384.92 <span class="unit">in-lb</span> = 380 <span class="unit">in-lb</span>'}
  ];
  fullQuestion29.reference='NCEES PE Mechanical Reference Handbook > Mechanical Components > Clutches and Brakes\nNCEES PE Mechanical Reference Handbook > Mechanical Components > Springs';
}
const fullQuestion30 = fullLengthQuestions.find(question => question.id === '1706038');
if (fullQuestion30) {
  fullQuestion30.text = 'The brake caliper shown in Figure 1 must generate sufficient braking torque to resist a 55 ft-lb torque at one wheel. The brake disk has an inner friction radius of 4 in. and an outer friction radius of 9 in. The brake lining has a coefficient of friction of 0.42, and uniform wear is assumed.\n\nA single brake pad contacts approximately one-quarter of the circumference of the brake disk. This angular coverage does not affect the torque equation; it is provided only to illustrate the pad geometry. The caliper applies the required normal force through two 1.5-in.-diameter hydraulic pistons acting on the brake pad.\n\nDetermine the hydraulic pressure required in the pistons to produce the braking torque.';
  fullQuestion30.blocks = [
    {text:'The uniform-wear torque equation uses the total normal force applied to the actual pad and its effective radius; therefore, an additional correction based solely on the pad’s angular area is not required. The attached document identifies the 4-in. and 9-in. pad radii and states that two 1.5-in.-diameter pistons actuate each pad.'},
    {text:'The brake must resist a torque of:'},
    {math:'T = 55 <span class="unit">ft&ndash;lb</span> (12) = 660 <span class="unit">in&ndash;lb</span>'},
    {text:'From the figure on page 1, the brake pad extends from an inner radius of 4 in. to an outer radius of 9 in. Under the uniform-wear assumption, the effective friction radius is:'},
    {math:'r<sub>m</sub> = <span class="fraction"><span>r<sub>o</sub> + r<sub>i</sub></span><span>2</span></span> = <span class="fraction"><span>9 + 4</span><span>2</span></span> = 6.5 <span class="unit">in.</span>'},
    {text:'For one brake pad, the braking torque is:'},
    {math:'T = &mu;Fr<sub>m</sub>'},
    {text:'where:\n\n&nbsp;&nbsp;&nbsp;&nbsp;• &mu; = 0.42\n&nbsp;&nbsp;&nbsp;&nbsp;• F is the normal force applied to the pad\n&nbsp;&nbsp;&nbsp;&nbsp;• r<sub>m</sub> = 6.5 in.'},
    {text:'Solving for the required normal force:'},
    {math:'F = <span class="fraction"><span>T</span><span>&mu;r<sub>m</sub></span></span>'},
    {math:'F = <span class="fraction"><span>660</span><span>(0.42)(6.5)</span></span> = 241.76 <span class="unit">lbf</span>'},
    {text:'Each brake pad is actuated by two hydraulic pistons, each having a diameter of 1.5 in. The total piston area acting on one pad is:'},
    {math:'A<sub>p</sub> = 2<span>(</span><span class="fraction"><span>&pi;d<sup>2</sup></span><span>4</span></span><span>)</span>'},
    {math:'A<sub>p</sub> = 2<span>[</span><span class="fraction"><span>&pi;(1.5)<sup>2</sup></span><span>4</span></span><span>]</span> = 3.534 <span class="unit">in<sup>2</sup></span>'},
    {text:'Rounding to the nearest available answer:'},
    {math:'p &asymp; 70'}
  ];
  fullQuestion30.reference='NCEES PE Mechanical Reference Handbook. V2.0 > Elements of Machine Design and Methodologies > Belts Pulley sand Chain';
}
const fullQuestion31 = fullLengthQuestions.find(question => question.id === '1706041');
if (fullQuestion31) {
  fullQuestion31.blocks = [
    {text:'Begin with calculating the pitch line velocity from “spur gears” in the NCEES PE Mechanical Reference Handbook: Elements of Machine Design and Methodologies: Mechanical Components'},
    {math:'V = <span class="fraction"><span>&pi;dn</span><span>12</span></span>'},
    {math:'V = <span class="fraction"><span>&pi; &times; 5 <span class="unit">in</span> &times; 3,300 <span class="unit">rpm</span></span><span>12</span></span> = 4,319.69 <span class="unit">ft/min</span>'},
    {text:'Use the V calculated to determine transmitted load:'},
    {math:'W<sub>t</sub> = <span class="fraction"><span>33,000 H</span><span>V</span></span>'},
    {math:'W<sub>t</sub> = <span class="fraction"><span>33,000 &times; 10 <span class="unit">hp</span></span><span>4,319.69 <span class="unit">ft/min</span></span></span> = 76.39 <span class="unit">lbf</span>'},
    {text:'The maximum bending stress in the gear teeth requires that the diametral pitch be known.'},
    {math:'P<sub>d</sub> = <span class="fraction"><span>N</span><span>d</span></span>'},
    {math:'P<sub>d</sub> = <span class="fraction"><span>50 <span class="unit">teeth</span></span><span>5 <span class="unit">in</span></span></span> = 10 <span class="unit">teeth/in</span>'},
    {text:'Now, use the equation for maximum bending stress in a gear tooth from “spur gears” in the NCEES PE Mechanical Reference Handbook: Elements of MAchine Design and Methodologies: Mechanical Components'},
    {math:'&sigma; = <span class="fraction"><span>W<sub>t</sub>P<sub>d</sub></span><span>FY</span></span>'},
    {math:'&sigma; = <span class="fraction"><span>76.39 <span class="unit">lbf</span> &times; <span class="fraction"><span>10 <span class="unit">teeth</span></span><span>1 <span class="unit">in</span></span></span></span><span>0.5 <span class="unit">in</span> &times; 0.4</span></span> = 3,819.72 <span class="unit">psi</span> &asymp; 3,800 <span class="unit">psi</span>'}
  ];
  fullQuestion31.reference='NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Mechanical Components';
}
const fullQuestion32 = fullLengthQuestions.find(question => question.id === '1706044');
if (fullQuestion32) {
  fullQuestion32.blocks = [
    {text:'First, determine the torsional stress in the shaft:'},
    {math:'&tau; = <span class="fraction"><span>Tr</span><span>J</span></span>'},
    {math:'J = <span class="fraction"><span>&pi;d<sup>4</sup></span><span>2</span></span> = <span>(</span><span class="fraction"><span>&pi;(2 <span class="unit">in</span>)<sup>4</sup></span><span>2</span></span><span>)</span> = 25.13 <span class="unit">in<sup>4</sup></span>'},
    {math:'&tau; = <span class="fraction"><span>S<sub>y</sub></span><span>2</span></span> = <span class="fraction"><span>Tr</span><span>J</span></span>'},
    {math:'<span class="fraction"><span>56,000 <span class="unit">psi</span></span><span>2</span></span> = <span class="fraction"><span>T &times; 2 <span class="unit">in</span></span><span>25.13 <span class="unit">in<sup>4</sup></span></span>'},
    {math:'T = 351,858 <span class="unit">in - lbf</span>'},
    {text:'Convert torque to force:'},
    {math:'T = Fr'},
    {math:'351,858 <span class="unit">in - lbf</span> = F &times; 2 <span class="unit">in</span>'},
    {math:'F = 175,929 <span class="unit">lbf</span>'},
    {text:'Determine the sheer stress that the key can withstand given the safety factor required:'},
    {math:'&tau; = <span class="fraction"><span>S<sub>y</sub></span><span>2</span></span>'},
    {math:'&tau;<sub>allowable</sub> = <span class="fraction"><span><span class="fraction"><span>S<sub>y</sub></span><span>2</span></span></span><span>FS</span></span> = <span class="fraction"><span><span class="fraction"><span>75,000 <span class="unit">psi</span></span><span>2</span></span></span><span>1.2</span></span> = 31,250 <span class="unit">psi</span>'},
    {text:'Knowing the max shear stress for the key and the input force from the shaft, calculate the key length:'},
    {math:'&tau;<sub>allowable</sub> = <span class="fraction"><span>F</span><span>A</span></span>'},
    {math:'31,250 <span class="unit">psi</span> = <span class="fraction"><span>175,929 <span class="unit">lbf</span></span><span>A</span></span>'},
    {math:'A = 5.629 <span class="unit">in<sup>2</sup></span> = width &times; length'},
    {math:'Length = <span class="fraction"><span>5.629 <span class="unit">in<sup>2</sup></span></span><span><span class="fraction"><span>7</span><span>8</span></span><span class="unit">in</span></span></span> = 6.43 <span class="unit">in</span>'}
  ];
  fullQuestion32.reference='NCEES PE Mechanical Reference Handbook, v. 2.0, Chapter 2, Section 2.11 Stress Analysis';
}
const fullQuestion33 = fullLengthQuestions.find(question => question.id === '1706057');
if (fullQuestion33) {
  fullQuestion33.answer = 0;
  fullQuestion33.blocks = [
    {text:'Refer to NCEES PE Mechanical Reference Handbook: Elements of Machine Design and Methodologies: Mechanical Components.  See below illustration.'},
    {image:'Screenshots for development/Solutions for full length exam/problem 33 solution picture.png'}
  ];
  fullQuestion33.reference='NCEES PE Mechanical Reference Handbook v 2.0 > chapter 2: Machine Design and Materials>2.16.6 Belts, Pulleys and Chain Drives> 2.16.6.4 Horsepower Rating for Roller chain-1986';
}
const fullQuestion34 = fullLengthQuestions.find(question => question.id === '1706058');
if (fullQuestion34) {
  fullQuestion34.answer = 2;
  fullQuestion34.blocks = [
    {text:'Minimum wall thickness is:'},
    {math:'&sigma;<sub>t1</sub> = <span class="fraction"><span>pd</span><span>2t</span></span>'},
    {math:'t = <span class="fraction"><span>pd</span><span>2&sigma;<sub>t1</sub></span></span> = <span class="fraction"><span>2.25 <span class="fraction"><span>N</span><span>m<sup>2</sup></span></span> &times; 1,600<span class="unit">mm</span></span><span>2 &times; 56 <span class="fraction"><span>N</span><span>m<sup>2</sup></span></span></span></span> = 32.14 <span class="unit">mm</span>'}
  ];
  fullQuestion34.reference='';
}
const fullQuestion35 = fullLengthQuestions.find(question => question.id === '1706060');
if (fullQuestion35) {
  fullQuestion35.answer = 1;
  fullQuestion35.blocks = [
    {math:'Q = 3,600 <span class="fraction"><span>m<sup>3</sup></span><span>hr</span></span> = 60 <span class="fraction"><span>m<sup>3</sup></span><span>min</span></span> = 1 <span class="fraction"><span>m<sup>3</sup></span><span>s</span></span>'},
    {math:'v = 40 <span class="fraction"><span>m</span><span>s</span></span>'},
    {math:'A = &pi;r<sup>2</sup>'},
    {math:'Q = Av = &pi;r<sup>2</sup> &times; v'},
    {math:'r = &radic;<span class="radic-content"><span class="fraction"><span>1 <span class="fraction"><span>m<sup>3</sup></span><span>s</span></span></span><span>&pi; &times; 40 <span class="fraction"><span>m</span><span>s</span></span></span></span></span> = 0.089 <span class="unit">m</span>'},
    {math:'D = 2 (0.089 <span class="unit">m</span>) = 0.178 <span class="unit">m</span> = 178 <span class="unit">mm</span>'}
  ];
  fullQuestion35.reference='NCEES PE Mechanical Handbook > Chapter 3: Hydraulics, Fluids and Pipe Flow';
}
const fullQuestion36 = fullLengthQuestions.find(question => question.id === '1706061');
if (fullQuestion36) {
  fullQuestion36.answer = 2;
  fullQuestion36.blocks = [
    {text:'Find number of active coils.'},
    {text:'For squared and ground ends:'},
    {math:'n<sub>a</sub> = n<sub>t</sub> &minus; 2 = 17 active coils'},
    {text:'Find the mean diameter of the spring'},
    {math:'D = D<sub>o</sub> &minus; D<sub>wire</sub> = 3.55 <span class="unit">in</span>'},
    {text:'Find the spring constant:'},
    {math:'k = <span class="fraction"><span>d<sup>4</sup>G</span><span>8D<sup>3</sup>n<sub>a</sub></span></span> = <span class="fraction"><span>(0.35<span class="unit">in</span>)<sup>4</sup>(11.5 &times; 10<sup>6</sup><span class="unit">psi</span>)</span><span>8(3.55<span class="unit">in</span>)<sup>3</sup>(17)</span></span> = 28.36 <span class="unit">lb/in</span>'},
    {text:'Solve for deflection.'},
    {math:'F = kx'},
    {math:'x = <span class="fraction"><span>F</span><span>k</span></span> = <span class="fraction"><span>85 <span class="unit">lb</span></span><span>28.36 <span class="unit">lb/in</span></span></span> = 2.996 <span class="unit">in</span> (3 <span class="unit">in</span>)'}
  ];
  fullQuestion36.reference='';
}
const fullQuestion37 = fullLengthQuestions.find(question => question.id === '1706069');
if (fullQuestion37) {
  fullQuestion37.answer = 2;
  fullQuestion37.blocks = [
    {math:'N = 1,100 <span class="fraction"><span>rev</span><span>min</span></span> = 18.33 <span class="fraction"><span>rev</span><span>s</span></span>'},
    {text:'Petroff’s equation:'},
    {math:'T = <span class="fraction"><span>4&pi;<sup>2</sup>r<sup>3</sup>L&mu;N</span><span>c</span></span> = <span class="fraction"><span>(4&pi;<sup>2</sup>)(3.5<span class="unit">in</span>)<sup>3</sup>(11<span class="unit">in</span>)(2.2 &times; 10<sup>&minus;6</sup>)(18.33 <span class="fraction"><span>rev</span><span>s</span></span>)</span><span>0.006</span></span> = 125.138 <span class="unit">in-lbf</span>'}
  ];
  fullQuestion37.reference='';
}
fullLengthQuestions.push({id:'1706070',complexity:'Medium',text:'A solid steel shaft has a diameter of 1 in and is loaded with a torque of 10 in-lb. Find the shear stress in the outer surface of the shaft.',choices:['51.02 lb/in²','61.05 lb/in²','47.53 lb/in²','57.70 lb/in²'],answer:0,blocks:[{math:'r = 0.5 <span class="unit">in</span>'},{math:'T = 10 <span class="unit">in&ndash;lb</span>'},{text:'The polar moment of inertia for a solid shaft is:'},{math:'J<sub>s</sub>(r) = <span class="fraction"><span>&pi;r<sup>4</sup></span><span>2</span></span>'},{math:'J<sub>s</sub>(r) = 0.098 <span class="unit">in<sup>4</sup></span>'},{text:'The shear stress at a given r is:'},{math:'&tau;(T,r,J<sub>s</sub>) = <span class="fraction"><span>T &times; r</span><span>J<sub>s</sub></span></span>'},{math:'&tau;(10&quot; <span class="unit">in&ndash;lb</span>&quot;, 0.5 <span class="unit">in</span>, 0.098 <span class="unit">in<sup>4</sup></span>) = 51.02 <span class="unit">lb/in<sup>2</sup></span>'}],reference:''});
fullLengthQuestions.push({id:'1706071',complexity:'Medium',text:'A steel shaft has an outside diameter of 1 in and an inside diameter of 0.5 in. The shaft is loaded with a torque of 10 in-lb. Find the shear stress in the outer surface of the shaft.',choices:['51.02 lb/in²','54.35 lb/in²','47.53 lb/in²','57.70 lb/in²'],answer:1,blocks:[{math:'r<sub>o</sub> = 0.5 <span class="unit">in</span>'},{math:'r<sub>i</sub> = 0.25 <span class="unit">in</span>'},{math:'T = 10 <span class="unit">in&ndash;lb</span>'},{text:'The polar moment of inertia for a hollow shaft is:'},{math:'J<sub>s</sub>(r) = <span class="fraction"><span>&pi;</span><span>2</span></span>(r<sub>o</sub><sup>4</sup> &minus; r<sub>i</sub><sup>4</sup>)'},{math:'J<sub>s</sub>(r) = 0.092 <span class="unit">in<sup>4</sup></span>'},{text:'The shear stress at a given r is:'},{math:'&tau;(T,r,J<sub>s</sub>) = <span class="fraction"><span>T &times; r</span><span>J<sub>s</sub></span></span>'},{math:'&tau;(10 <span class="unit">in&ndash;lb</span>, 0.5 <span class="unit">in</span>, 0.092 <span class="unit">in<sup>4</sup></span>) = 54.348 <span class="unit">lb/in<sup>2</sup></span>'}],reference:''});
fullLengthQuestions.push({id:'1706074',complexity:'Medium',text:'A 1-in diameter solid brass shaft that is 1 ft in length (E = 16 × 10⁶ lbf / in²; ν = 0.36) is spinning at 120 rpm and transmits 3 hp. What is the angle of twist in the shaft (in radians)?',choices:['0.033','0.045','0.081','0.027'],answer:0,blocks:[{text:'Given that:'},{math:'E<sub>brass</sub> = 16 &times; 10<sup>6</sup> <span class="unit">lbf/in<sup>2</sup></span>'},{math:'&nu;<sub>brass</sub> = 0.36'},{math:'r = 0.5 <span class="unit">in</span>'},{math:'L = 1 <span class="unit">ft</span> = 12 <span class="unit">in</span>'},{math:'P<sub>hp</sub> = 3'},{math:'n<sub>rpm</sub> = 120'},{text:'Shear force is:'},{math:'G<sub>brass</sub>(E<sub>brass</sub>, &nu;<sub>brass</sub>) = <span class="fraction"><span>E<sub>brass</sub></span><span>2 &times; (1 + &nu;<sub>brass</sub>)</span></span>'},{math:'G<sub>brass</sub><span>[</span>16 &times; (10<sup>6</sup>) <span class="unit">lbf / in<sup>2</sup></span>, 0.36<span>]</span> = (5.882 &times; 10<sup>6</sup>) <span class="unit">lbf / in<sup>2</sup></span>'},{text:'Find torque.'},{math:'T(P<sub>hp</sub>, n<sub>rpm</sub>) = <span class="fraction"><span>63,025 &times; P<sub>hp</sub></span><span>n<sub>rpm</sub></span></span>'},{math:'T(3, 120) = 157.6 &times; 10<sup>3</sup>'},{text:'The polar moment of inertia for a solid shaft is:'},{math:'J<sub>s</sub>(r) = <span class="fraction"><span>&pi;r<sup>4</sup></span><span>2</span></span>'},{math:'J<sub>s</sub>(r) = 0.098 <span class="unit">in<sup>4</sup></span>'},{text:'Find the angle of twist in radians.'},{math:'&gamma;(T, L, G, J) = <span class="fraction"><span>T &times; L</span><span>G &times; J</span></span>'},{math:'&gamma;(1,576, 12, 5.882 &times; 10<sup>6</sup>, 0.098 = 0.033'},{text:'Answer: A'}],reference:''});
fullLengthQuestions.push({id:'1706075',complexity:'Medium',text:'A 1-ft long hollow brass shaft with an outside diameter of 1 in and an inside diameter of 0.5 in (E = 16 × 10⁶ lbf/in²; ν = 0.36) is spinning at 120 rpm and transmits 3 hp. What is the angle of twist in the shaft (in radians)?',choices:['0.035','0.033','0.042','0.027'],answer:0,blocks:[{text:'Given that:'},{math:'E<sub>brass</sub> = 16 &times; 10<sup>6</sup> <span class="unit">lbf / in<sup>2</sup></span>'},{math:'&nu;<sub>brass</sub> = 0.36'},{math:'r<sub>o</sub> = 0.5 <span class="unit">in</span>'},{math:'r<sub>i</sub> = 0.25 <span class="unit">in</span>'},{math:'L = 1 <span class="unit">ft</span> = 12 <span class="unit">in</span>'},{math:'P<sub>hp</sub> = 3'},{math:'n<sub>rpm</sub> = 120'},{text:'Shear force is:'},{math:'G<sub>brass</sub>(E<sub>brass</sub>, &nu;<sub>brass</sub>) = <span class="fraction"><span>E<sub>brass</sub></span><span>2 &times; (1 + &nu;<sub>brass</sub>)</span></span>'},{math:'G<sub>brass</sub><span>[</span>16 &times; (10<sup>6</sup>) <span class="unit">lbf / in<sup>2</sup></span>, 0.36<span>]</span> = (5.882 &times; 10<sup>6</sup>) <span class="unit">lbf / in<sup>2</sup></span>'},{text:'Find torque.'},{math:'T(P<sub>hp</sub>, n<sub>rpm</sub>) = <span class="fraction"><span>63,025 &times; P<sub>hp</sub></span><span>n<sub>rpm</sub></span></span>'},{math:'T(3, 120) = 1.576 &times; 10<sup>3</sup>'},{text:'The polar moment of inertia for a solid shaft is:'},{math:'J<sub>s</sub>(r) = <span class="fraction"><span>&pi;</span><span>2</span></span> &times; (r<sub>o</sub><sup>4</sup> &minus; r<sub>i</sub><sup>4</sup>)'},{math:'J<sub>s</sub>(r) = 0.092 <span class="unit">in<sup>4</sup></span>'},{text:'Find the angle of twist in radians.'},{math:'&gamma;(T, L, G, J) = <span class="fraction"><span>T &times; L</span><span>G &times; J</span></span>'},{math:'&gamma;(1,576, 12, 5.882 &times; 10<sup>6</sup>, 0.092) = 0.035'},{text:'Answer: A'}],reference:''});
fullLengthQuestions.push({id:'1706084',complexity:'Medium',text:'A tank car pressure relief valve uses a helical spring with squared and ground ends. The special spring is made of 3-mm diameter wire that has a shear modulus of 2.1 × 10⁹ N/mm². The spring index is 8, and the maximum spring deflection is 15 mm. The maximum operating force is 3.9 × 10⁶ N. How many total coils must the spring have?',choices:['6','7','8','9'],answer:2,blocks:[{text:'Use the equation for spring index.'},{math:'C = <span class="fraction"><span>D</span><span>d</span></span>'},{math:'D = Cd'},{text:'Deflection and force are related per the following equation:'},{math:'k = <span class="fraction"><span>d<sup>4</sup>G</span><span>8D<sup>3</sup>N</span></span>'},{math:'D = Cd'},{math:'k = <span class="fraction"><span>d<sup>4</sup>G</span><span>8 (Cd)<sup>3</sup>N</span></span> = <span class="fraction"><span>dG</span><span>8C<sup>3</sup>N</span></span>'},{text:'Rearrange F = kx to k = F/x and plug it into the equation as follows:'},{math:'k = <span class="fraction"><span>dG</span><span>8C<sup>3</sup>N</span></span>'},{math:'<span class="fraction"><span>F</span><span>x</span></span> = <span class="fraction"><span>dG</span><span>8C<sup>3</sup>N</span></span>'},{text:'Rearrange to solve for N.'},{math:'N = <span class="fraction"><span>dG</span><span>8C<sup>3</sup><span>(</span><span class="fraction"><span>F</span><span>x</span></span><span>)</span></span></span> = <span class="fraction"><span>3 <span class="unit">mm</span> &times; <span>(</span>2.1 &times; 10<sup>9</sup> <span class="fraction"><span>N</span><span>mm<sup>2</sup></span></span><span>)</span></span><span>8 &times; 8<sup>3</sup> &times; <span>(</span><span class="fraction"><span>3.9 &times; 10<sup>6</sup> <span class="unit">N</span></span><span>15 <span class="unit">mm</span></span></span><span>)</span></span></span>'},{math:'N = 5.9157'},{text:'Use the “Compression Spring Dimensions” table to solve for the total number of coils.'},{math:'N<sub>t</sub> = N + 2'},{math:'N<sub>t</sub> = 5.9157 + 2 = 7.9157'},{text:'Round up to the nearest whole number.'},{math:'N<sub>t</sub> = 8'}],reference:'NCEES PE Mechanical Reference Handbook, Section 2.16.1 “Springs.”'});
fullLengthQuestions.push({id:'1707005',complexity:'Medium',text:'Two members are clamped by a single M10 fully threaded bolt. The clamped length is 50 mm. The bolt is torqued to 75% of its proof strength, which results in a preload of 50 kN. The tensile area of the bolt is 58 mm², and the modulus of elasticity of the bolt and member materials are 200 GPa. The stiffness of the members is 1.5 times the stiffness of the bolt. A load of 115.5 kN is applied to the clamped parts in a direction that directly opposes the clamp load of the bolt. Find the load in the clamped members in this scenario.',choices:['0 N','-20 kN','40 kN','100 kN'],answer:1,blocks:[{math:'C = <span class="fraction"><span>k<sub>b</sub></span><span>k<sub>b</sub> + k<sub>m</sub></span></span> = <span class="fraction"><span>1</span><span>1 + 1.5</span></span> = 0.4\n\nF<sub>m</sub> = F<sub>i</sub> &minus; (1 &minus; C)P = 50 kN &minus; (1 &minus; 0.4)(115.5 kN) = -19.3 kN &asymp; -20 kN'}],reference:''});
const fullQuestion43 = fullLengthQuestions.find(question => question.id === '1707005');
if (fullQuestion43) {
  fullQuestion43.answer = 0;
  fullQuestion43.blocks = [
    {text:'Find the stiffness of the bolt:'},
    {math:'k<sub>b</sub> = <span class="fraction"><span>AE</span><span>L</span></span>'},
    {math:'k<sub>b</sub> = <span class="fraction"><span>(58 &times; 10<sup>&minus;6</sup>)(200 &times; 10<sup>9</sup>)</span><span>.05 <span class="unit">m</span></span></span> = 2.32 &times; 10<sup>8</sup> <span class="fraction"><span>N</span><span>m</span></span>'},
    {text:'Find the stiffness of the members:'},
    {math:'k<sub>m</sub> = k<sub>b</sub> &times; 1.5 = 3.48 &times; 10<sup>8</sup> <span class="unit">N/m</span>'},
    {text:'Remaining clamping force in the members::'},
    {math:'F<sub>m</sub> = F<sub>1</sub> &minus; P <span>(</span><span class="fraction"><span>k<sub>m</sub></span><span>k<sub>b</sub> + k<sub>m</sub></span></span><span>)</span>'},
    {math:'F<sub>m</sub> = 50 <span class="unit">kN</span> &minus; 115.5 <span class="unit">kN</span> <span>(</span><span class="fraction"><span>3.48 &times; 10<sup>8</sup> <span class="fraction"><span>N</span><span>m</span></span></span><span><span>(</span>2.32 &times; 10<sup>8</sup> <span class="fraction"><span>N</span><span>m</span></span><span>)</span> + <span>(</span>3.48 &times; 10<sup>8</sup> <span class="fraction"><span>N</span><span>m</span></span><span>)</span></span></span><span>)</span> = &minus;19,300 <span class="unit">N</span> (20 <span class="unit">kN</span>)'},
    {text:'A negative value means the members have separated, so the clamped-member load cannot go below zero. Therefore, F<sub>m</sub> = 0'}
  ];
  fullQuestion43.reference='NCEES PE Mechanical Reference Handbook, V.2.0 > Joints and Fasteners > Tension Connections - External Loads';
}
fullLengthQuestions.push({id:'1707009',complexity:'Medium',text:'A small pressure vessel is created by fillet welding class 300 slip-on flanges, having a bore of 4.57 in, onto a NPS 4 schedule 40 steel pipe and sealing the ends with class 300 blind flanges as shown in the figure below. All pipe and flanges are made from CSA Z245.1 grade 359 steel (minimum yield stress of 52.1 ksi and ultimate stress of 66.0 ksi). The flanges have eight 0.75-in UNC studs equally spaced around the circumference of the flanges. What is the minimum leg length of an equal-length fillet weld if the shear stress in the weld is not to exceed 40% of yield, assuming an internal pressure of 750 psi and that the welds are made using an E6018 electrode?',image:'Screenshots for development/Questions for full length exam/problem 44 picture.png',choices:['0.035 in','0.044 in','0.049 in','0.062 in'],answer:3,blocks:[
  {text:'From the “Minimum Weld-Metal Properties” table in the <em>NCEES PE Mechanical Reference Handbook: Joints and Fasteners: Tension Connections - External Loads</em>, the yield and ultimate strength of E6018 filler material are 50 ksi and 62 ksi, respectively. Note that the weld material is slightly under matched to the parent material and yields at a lower stress than the pipe or flange material.'},
  {text:'The available area for shear in the throat of the fillet weld'},
  {math:'A<sub>s</sub>'},
  {text:'can be computed as:'},
  {math:'A<sub>s</sub> = <span class="fraction"><span>&pi;Dh</span><span>&radic;<span class="radic-content">2</span></span></span> = <span class="fraction"><span>2&pi;rh</span><span>&radic;<span class="radic-content">2</span></span></span> = &radic;<span class="radic-content">2</span>&pi;rh,'},
  {text:'where'},
  {math:'D(r)'},
  {text:'is the outer diameter (radius) of the pipe and h is the length of the fillet weld’s leg. (NCEES <em>PE Mechanical Reference Handbook: Welding</em>) From the “Schedule 40 Steel Pipe” table in the <em>NCEES PE Mechanical Reference Handbook: Pipe and Tube Data</em>, the outer diameter of a schedule 40 steel pipe can be computed as (4.026 in + 2 &times; 0.237 in) = 4.5 in. The available area for shear is:'},
  {math:'A<sub>s</sub> = <span class="fraction"><span>&pi;Dh</span><span>&radic;<span class="radic-content">2</span></span></span> = <span class="fraction"><span>&pi;(4.5 <span class="unit">in</span>)h</span><span>&radic;<span class="radic-content">2</span></span></span> = 9.996h <span class="unit">in<sup>2</sup></span>'},
  {text:'The effective load carried by each fillet weld P is the product of the internal pressure'},
  {math:'P<sub>i</sub>'},
  {text:'and the area in the blind flange that the internal pressure acts on; P is calculated as:'},
  {math:'P = <span class="fraction"><span>&pi;</span><span>4</span></span>P<sub>i</sub>B<sup>2</sup> = <span class="fraction"><span>&pi;</span><span>4</span></span>(750 <span class="unit">psi</span>)(4.57 <span class="unit">in</span>)<sup>2</sup> = 12302 <span class="unit">lbf</span>,'},
  {text:'where B is the bore of the slip-on flange. The shear stress in the weld'},
  {math:'&tau;'},
  {text:'can then be computed as:'},
  {math:'&tau; = <span class="fraction"><span>P</span><span>A<sub>s</sub></span></span> = <span class="fraction"><span>12,302 <span class="unit">lbf</span></span><span>9.996h <span class="unit">in<sup>2</sup></span></span></span> = <span>(</span><span class="fraction"><span>1,231</span><span>h</span></span><span>)</span> <span class="unit">psi</span>'},
  {text:'Setting equation above equal to 40% of the yield stress of the electrode material gives:'},
  {math:'<span>(</span><span class="fraction"><span>1,231</span><span>h</span></span><span>)</span> <span class="unit">psi</span> = 0.4 &times; 50,000 <span class="unit">psi</span> &rArr; h = 0.062 <span class="unit">in</span>'},
  {text:'Notes:'},
  {text:'&bull;&nbsp; Answer A is derived by using the ultimate strength of the weld and neglecting the factor of 1/&radic;<span class="radic-content">2</span> in equation (1).'},
  {text:'&bull;&nbsp; Answer B is derived by neglecting the factor of r in equation (1).'},
  {text:'&bull;&nbsp; Answer C is derived by using the ultimate strength of the weld.'}
],reference:'NCEES PE Mechanical Reference Handbook > Pipe and Tube Data\n\nNCEES PE Mechanical Reference Handbook: Welding\n\nNCEES PE Mechanical Reference Handbook > Joints and Fasteners > Tension Connections - External Loads'});
fullLengthQuestions.push({
  id:'1707018',
  complexity:'Easy',
  text:'Which of the following is not a common failure mode of a riveted joint?',
  choices:['Bearing/crushing','Delamination','Shear tear-out','Tensile rupture'],
  answer:1,
  blocks:[
    {text:'Refer to <em>NCEES PE Mechanical Reference Handbook: Elements of Machine Design and Methodologies: Joints and Fasteners Design</em>'},
    {text:'Delamination is a common failure mode of an adhesive joint. Bearing, shear tear-out, and tensile rupture are common failure modes of bolted and riveted joints.'}
  ],
  reference:'NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Joints and Fasteners Design'
});
fullLengthQuestions.push({
  id:'1707020',
  complexity:'Medium',
  text:'A bolted joint consists of twelve A325 3/4-10-UNC-2A bolts evenly spaced in a 12-in diameter circle, as illustrated. It is eccentrically loaded with a vertical 10,000-lbf load located 5 ft from the center of the bolt group. What is the safety factor relative to yield strength in shear? Use the elastic method.',
  image:'Screenshots for development/Questions for full length exam/problem 46 picture.jpg',
  choices:['1.9','4.0','8.2','15.4'],
  answer:0,
  blocks:[
    {text:'Refer to the <em>NCEES PE Mechanical Reference Handbook: Elements of Machine Design and Methodologies: Joints and Fasteners</em> for the formulas for fastener groups in shear, for 3/4” A325 bolt mechanical properties, and for the tensile area of UNC bolts.'},
    {text:'Decompose the reaction into that caused by direct shear and that caused by moment. Then determine the magnitude of force vector.'},
    {text:'Shear-caused force per bolt:'},
    {math:'F<sub>s</sub> = <span class="fraction"><span>P</span><span>n</span></span> = <span class="fraction"><span>&minus;10 <span class="unit">kip</span></span><span>12</span></span> = &minus;0.833 <span class="unit">kip</span> (direction:vertical)'},
    {text:'Moment caused by applied force:'},
    {math:'M = r &times; P = 5 <span class="unit">ft</span> &times; <span class="fraction"><span>12 <span class="unit">in</span></span><span>ft</span></span> &times; 10 <span class="unit">kip</span> = 600 <span class="unit">kip&minus;in</span>'},
    {text:'Moment-caused force per bolt:'},
    {math:'F<sub>m</sub> = <span class="fraction"><span>M &times; r</span><span>&sum;r<sub>i</sub><sup>2</sup></span></span> = <span class="fraction"><span>(600 <span class="unit">kip&minus;in</span>) &times; 6 <span class="unit">in</span></span><span>12 &times; (6 <span class="unit">in</span>)<sup>2</sup></span></span> = 8.33 <span class="unit">kip</span> (direction:circumferential)'},
    {text:'The most heavily loaded fasteners are identified by inspection as those closest to the load. However, the load on every fastener can be found to prove this:'},
    {text:'Split moment-caused force into vector components.'},
    {math:'&theta; = 15&deg;,45&deg;,75&deg;,105&deg;,135&deg;,165&deg;,195&deg;,225&deg;,255&deg;,285&deg;,315&deg;,345&deg;'},
    {text:'horizontal:'},
    {math:'F<sub>m,h</sub> = F<sub>m</sub> sin&theta;'},
    {text:'vertical:'},
    {math:'F<sub>m,v</sub> = &minus;F<sub>m</sub> cos&theta;'},
    {text:'Combine forces.'},
    {math:'&sum;F<sub>h</sub> :\nF<sub>m,h</sub> = F<sub>m</sub> sin&theta; = 8.33 <span class="unit">kip</span> &times; sin&theta;'},
    {math:'&sum;F<sub>v</sub> : F<sub>s</sub> + F<sub>v,h</sub> = F<sub>s</sub> &minus; F<sub>m</sub> cos&theta; = &minus;0.833 <span class="unit">kip</span> &minus; 8.33 <span class="unit">kip</span> &times; cos&theta;'},
    {math:'|F| = &radic;<span class="radic-content">(&sum;F<sub>h</sub>)<sup>2</sup> + (&sum;F<sub>v</sub>)<sup>2</sup></span> = &radic;<span class="radic-content">(8.33 <span class="unit">kip</span> &times; sin&theta;)<sup>2</sup> + (&minus;0.833 <span class="unit">kip</span> &minus; 8.33 <span class="unit">kip</span> &times; cos&theta;)<sup>2</sup></span>'},
    {math:'|F| = [9.14,8.94,8.58,8.15,7.76,7.52,7.52,7.76,8.15,8.58,8.94,9.14] <span class="unit">kip</span>'},
    {text:'Maximum force = 9.14 kip'},
    {text:'Stress:'},
    {math:'&tau; = <span class="fraction"><span>|F|</span><span>A<sub>t</sub></span></span> = <span class="fraction"><span>9.14 <span class="unit">kip</span></span><span>0.334 <span class="unit">in<sup>2</sup></span></span></span> = 27.4 <span class="unit">ksi</span>'},
    {text:', where A is the tensile area of the 3/4” bolt.'},
    {text:'Estimate A325 yield stress in shear from tensile yield stress (92 ksi), as described in NCEES’s Handbook’s description of S<sub>ys</sub> based on S<sub>yt</sub> in their spring design section.'},
    {math:'S<sub>ys</sub> &asymp; <span class="fraction"><span>S<sub>y</sub></span><span>&radic;<span class="radic-content">3</span></span></span> = <span class="fraction"><span>92 <span class="unit">ksi</span></span><span>&radic;<span class="radic-content">3</span></span></span> = 53.1 <span class="unit">ksi</span>'},
    {text:'Calculate safety factor.'},
    {math:'SF = <span class="fraction"><span>S<sub>ys</sub></span><span>s<sub>&tau;</sub></span></span> = <span class="fraction"><span>53.1 <span class="unit">ksi</span></span><span>27.4 <span class="unit">ksi</span></span></span> = 1.94'}
  ],
  reference:'NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Joints and Fasteners'
});
fullLengthQuestions.push({
  id:'1707023',
  complexity:'Easy',
  text:'The head of an SAE bolt has 6 radial tics going 360° around the head. What is the grade of the bolt?',
  choices:['Grade 2','Grade 5','Grade 6','Grade 8'],
  answer:3,
  blocks:[
    {text:'Refer to the <em>NCEES PE Mechanical Reference Handbook: Elements of Machine Design and Methodologies: Joints and Fasteners</em>'},
    {text:'An SAE bolt with 6 radial tics going 360° around the head is a grade-8 bolt.'}
  ],
  reference:'NCEES PE Mechanical Reference Handbook > Machine Design > Elements of Machine Design and Methodologies > Joints and Fasteners'
});
fullLengthQuestions.push({
  id:'1707033',
  complexity:'Medium',
  text:'As shown in Figure 1, a 4 in wide steel plate is adhesively bonded to a steel substrate. Urethane glue with the highest possible peel strength is used for the bond. What is the maximum distributed load F that the adhesive can withstand before peeling? (Ignore the moment effect)',
  image:'Screenshots for development/Questions for full length exam/problem 48 picture.png',
  choices:['1.5 lbf/in','8 lbf/in','10 lbf/in','50 lbf/in'],
  answer:1,
  blocks:[
    {text:'First, find the peel strength of urethane glue in “adhesives and bonding in the NCEES PE Mechanical Reference Handbook: Elements of Machine Design and Methodologies: Joints and Fasteners. Urethane peel strength is 50 lb/in.'},
    {text:'Next, calculate the force required at the adhesive edge to start peeling.'},
    {math:'width = 4 <span class="unit">in</span>'},
    {math:'strength = <span class="fraction"><span>50 <span class="unit">lbf</span></span><span>1 <span class="unit">in</span></span></span>'},
    {math:'force = 4 <span class="unit">in</span> &times; <span class="fraction"><span>50 <span class="unit">lbf</span></span><span>1 <span class="unit">in</span></span></span> = 200 <span class="unit">lbf</span>'},
    {text:'Treat the steel beam as a rigidly mounted cantilevered beam. Peel force is the shear force at the rigid mount. Use the equations in the chart found in the <em>NCEES PE Mechanical Reference Handbook: Elements of Machine Design and Methodologies: Stress Analysis</em> to find the answer:'},
    {math:'V = wl'},
    {math:'V = 200 <span class="unit">lbf</span>'},
    {math:'l = 24 <span class="unit">in</span>'},
    {math:'w = <span class="fraction"><span>V</span><span>l</span></span> = <span class="fraction"><span>200 <span class="unit">lbf</span></span><span>24 <span class="unit">in</span></span></span> = 8.3 <span class="unit">lbf/in</span>'}
  ],
  reference:'NCEES PE Mechanical Reference Handbook V1.9 > Elements of Machine Design and Methodologies > Stress Analysis\n\nNCEES PE Mechanical Reference Handbook V1.9 > Elements of Machine Design and Methodologies > Joints and Fasteners'
});
fullLengthQuestions.push({
  id:'1707036',
  complexity:'Medium',
  text:'Two solid steel shafts, each with a diameter of 2.5 in, are connected using a cast-iron flanged coupling. The shaft assembly is subjected to a transmitted torque of 720 in-lb. The coupling consists of two flanges fastened together by five bolts, equally spaced on a 4-inch bolt circle. Assuming the allowable (design) shear stress for the bolts is 8,000 psi, determine the required minimum bolt diameter to safely transmit the applied torque.',
  choices:['0.125 in','0.327 in','0.107 in','0.053 in'],
  answer:2,
  blocks:[
    {text:'Answer: C'},
    {text:'Solution: Determine the force generated by torque.'},
    {math:'F<sub>bolt</sub> = <span class="fraction"><span>Mr</span><span>&sum;r<sub>i</sub><sup>2</sup></span></span> = <span class="fraction"><span>720 <span class="unit">in&minus;lb</span> &times; 2 <span class="unit">in</span></span><span>5 &times; (2 <span class="unit">in</span>)<sup>2</sup></span></span> = 72 <span class="unit">lb</span>'},
    {math:'&sigma;<sub>bolt</sub> = <span class="fraction"><span>F<sub>bolt</sub></span><span>A<sub>bolt</sub></span></span>'},
    {math:'A<sub>bolt</sub> = <span class="fraction"><span>F<sub>bolt</sub></span><span>&sigma;<sub>bolt</sub></span></span> = <span class="fraction"><span>72 <span class="unit">lb</span></span><span>8,000 <span class="unit">psi</span></span></span> = 0.009 <span class="unit">in<sup>2</sup></span>'},
    {math:'A<sub>bolt</sub> = &pi;r<sup>2</sup>'},
    {math:'r = &radic;<span class="radic-content"><span class="fraction"><span>A<sub>bolt</sub></span><span>&pi;</span></span></span> = 0.0535 <span class="unit">in</span>'},
    {math:'d<sub>bolt</sub> = 0.107 <span class="unit">in</span>'}
  ],
  reference:'NCEES PE Mechanical > Chapter 2: Machine Design and Material > Bolted and Riveted Joints > Fastener Groups in Shear'
});
fullLengthQuestions.push({
  id:'1707041',
  complexity:'Medium',
  text:'A 0.25-in fillet weld is used to hold two 6-in wide plates together. If a force of 120 lb is applied to the plates as shown in the figure below, which value is closest to the shear stress in the weld?',
  image:'Screenshots for development/Questions for full length exam/problem 50 picture.png',
  choices:['113 lb/in²','120 lb/in²','108 lb/in²','117 lb/in²'],
  answer:0,
  blocks:[
    {math:'y = 0.25 <span class="unit">in</span>'},
    {math:'b = 6 <span class="unit">in</span>'},
    {math:'t<sub>e</sub>(y) = <span class="fraction"><span>&radic;<span class="radic-content">2</span></span><span>2</span></span> &times; y'},
    {math:'t<sub>e</sub>(0.25) = 0.177'},
    {math:'&tau;(F,b,t<sub>e</sub>) = <span class="fraction"><span>F</span><span>b &times; t<sub>e</sub></span></span>'},
    {math:'&tau;(120 <span class="unit">lb</span>,6 <span class="unit">in</span>,0.177 <span class="unit">in</span>) = 112.994 <span class="unit">lb/in<sup>2</sup></span>'},
    {text:'Answer: A'}
  ],
  reference:''
});
fullLengthQuestions.push({
  id:'1707049',
  complexity:'Medium',
  text:'A steel plate carries an 8,000-lb load and is held in place by four 0.5-in diameter bolts as shown in the figure below. Find the maximum bolt shear stress.',
  image:'Screenshots for development/Questions for full length exam/problem 51 picture.png',
  choices:['68,663 psi','78,090 psi','57,781 psi','42,069 psi'],
  answer:1,
  blocks:[
    {math:'P = 8,000 <span class="unit">lb</span>'},
    {math:'M = 8,000 <span class="unit">lb</span> &times; 10 <span class="unit">in</span> = 80,000 <span class="unit">in&minus;lb</span>'},
    {math:'n = 4'},
    {text:'Primary shear force (direct shear): (NCEES FE Handbook, pg 438)'},
    {math:'F<sub>1i</sub> = <span class="fraction"><span>P</span><span>n</span></span>'},
    {math:'F<sub>1i</sub> = 2,000 <span class="unit">lb</span>'},
    {text:'Secondary shear force:'},
    {math:'F<sub>2i</sub> = <span class="fraction"><span>Mr</span><span>&sum;<sub>i=1</sub><sup>n</sup>r<sub>i</sub><sup>2</sup></span></span> = <span class="fraction"><span>M</span><span>4r</span></span>'},
    {math:'F<sub>2i</sub> = <span class="fraction"><span>(8,000 <span class="unit">lb</span> * 10 <span class="unit">in</span>)</span><span>4 * .5 <span class="unit">in</span></span></span> = 13,333 <span class="unit">lb</span>'},
    {text:'By inspection, the maximum stress will be on the righthand bolt, bolt 2, due to the direction of the forces caused by direct shear and caused by the moment. However, the stress on any of the bolts can be calculated'},
    {math:'F<sub>total;bolt1</sub> = &radic;<span class="radic-content">(2,000 <span class="unit">lb</span>)<sup>2</sup> + (13,333 <span class="unit">lb</span>)<sup>2</sup></span> = 13,482 <span class="unit">lb</span>'},
    {math:'&tau;<sub>bolt</sub>(F<sub>1</sub>,r) = <span class="fraction"><span>F<sub>1</sub></span><span>&pi;r<sup>2</sup></span></span>'},
    {math:'&tau;<sub>bolt</sub>(13,482 <span class="unit">lb</span>,0.25 <span class="unit">in</span>) = 68,663 <span class="unit">lb/in<sup>2</sup></span> for Bolt 1'},
    {math:'&tau;<sub>total:bolt2</sub> = 2,000 <span class="unit">lb</span> + 13,333 <span class="unit">lb</span> = 15,333 <span class="unit">lb</span>'},
    {math:'&tau;<sub>bolt2</sub> = <span class="fraction"><span>15,333 <span class="unit">lb</span></span><span>0.196 <span class="unit">in<sup>2</sup></span></span></span> = 78,090 <span class="unit">psi</span> for Bolt 2'},
    {math:'&tau;<sub>bolt3</sub> = <span class="fraction"><span>13,482 <span class="unit">lb</span></span><span>0.196 <span class="unit">in<sup>2</sup></span></span></span> = 68,663 <span class="unit">lb/in<sup>2</sup></span> for Bolt 3'},
    {math:'&tau;<sub>bolt4</sub> = <span class="fraction"><span>11,333 <span class="unit">lb</span></span><span>0.196 <span class="unit">in<sup>2</sup></span></span></span> = 57,718 <span class="unit">lb/in<sup>2</sup></span> for Bolt 4'},
    {image:'Screenshots for development/Solutions for full length exam/problem 51 solution picture.png'},
    {text:'Answer: B'}
  ],
  reference:'NCESS PE Mechanical Handbook V1.8, Chapter 2: Machine Design and Materials, 2.18 Joints and Fasteners'
});
fullLengthQuestions.push({
  id:'1707051',
  complexity:'Medium',
  text:'A lubricated 9/16-in UNF A36 bolt will be reused when the equipment reaches the client’s location. Which torque will be required for assembly on the assembly shop floor?',
  choices:['271 in x lbf','537 in x lbf','303 in x lbf','471 in x lbf'],
  answer:3,
  blocks:[
    {text:'Using the rule of thumb:'},
    {math:'&sigma;<sub>p</sub> = 0.85 &times; &sigma;<sub>y</sub> = 0.85 &times; 36 <span class="unit">ksi</span> = 30.6 <span class="unit">ksi</span>'},
    {text:'Calculate the proof force. (Look up the tensile area of a 9/16-in bolt.)'},
    {math:'F<sub>p</sub> = A<sub>t</sub> &times; &sigma;<sub>p</sub> = 0.203 <span class="unit">in<sup>2</sup></span> &times; 30,600 <span class="unit">psi</span> = 6,211.8 <span class="unit">lbf</span>'},
    {math:'F<sub>i</sub> = 0.75 &times; F<sub>p</sub> = 0.75 &times; 6211.8 <span class="unit">lbf</span> = 4,658.85 <span class="unit">lbf</span>'},
    {text:'Torque required: K = 0.18 for lubricated connections:'},
    {math:'T = K &times; F<sub>i</sub> &times; d = 0.18 &times; 4,658.85 <span class="unit">lbf</span> &times; <span class="fraction"><span>9</span><span>16</span></span> <span class="unit">in</span> = 471.71 <span class="unit">in &times; lbf</span>'}
  ],
  reference:'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties\n\nRefer to the NCEES PE Mechanical Reference Handbook > Joints and Fasteners > Bolts'
});
fullLengthQuestions.push({
  id:'1708002',
  complexity:'Easy',
  text:'AGMA is the trade group of companies involving power transmission components. What does the acronym AGMA stands for?',
  choices:['Assistant General Manager for Administration','Association of Greater Manchester Authorities','American Gear Manufacturers Association','American Guild of Musical Artists'],
  answer:2,
  blocks:[{text:'American Gear Manufacturers Association'}],
  reference:''
});
fullLengthQuestions.push({
  id:'1708006',
  complexity:'Easy',
  text:'Given the chart below, which quenching media material should be used to quickly quench a high-carbon steel from austenite to martensite?',
  image:'Screenshots for development/Questions for full length exam/problem 54 picture.png',
  choices:['Air','Oil','Water','Brine'],
  answer:3,
  blocks:[{text:'From the curves shown above, all the quenching media start in the austenite phase, but brine is the only option that reaches an end phase of martensite. Additionally, brine is the quickest quenching media (it takes the shortest time to quench the steel.) Therefore, the answer is D.'}],
  reference:''
});
fullLengthQuestions.push({
  id:'1708010',
  complexity:'Easy',
  text:'Which of the following processes is not a form of arc welding?',
  choices:['Oxyacetylene welding','MIG welding','TIG welding','SMA welding'],
  answer:0,
  blocks:[
    {text:'Oxyacetylene welding is a gas welding process that uses oxygen and acetylene to generate a flame.'},
    {text:'MIG (metal inert gas) welding is an arc welding process. The electrode supplies the current which generates the arc between the electrode and the workpiece.'},
    {text:'TIG (tungsten inert gas) welding is an arc welding process. The electrode supplies the current which generates the arc between the electrode and the workpiece.'},
    {text:'SMA (shielded metal arc) welding is an arc welding process. The electrode supplies the current which generates the arc between the electrode and the workpiece.'}
  ],
  reference:''
});
fullLengthQuestions.push({
  id:'1708013',
  complexity:'Easy',
  text:'For the following typical fatigue test plot (S-N curve), which point marks the endurance limit (S<sub>e</sub>′) of the material?',
  image:'Screenshots for development/Questions for full length exam/problem 56 picture.png',
  choices:['Point 1','Point 2','Point 3','Point 4'],
  answer:3,
  blocks:[
    {text:'Point 1 marks the ultimate strength (S<sub>u</sub>) of the material.'},
    {text:'Point 2 and point 3 mark general levels of strength pertaining to a specified number of cycles, but neither of them are the endurance limit.'},
    {text:'Point 4 marks the stress at which the cycles reach an asymptote. Any number of cycles at this stress level will not cause failure. Point 4 is the endurance limit.'}
  ],
  reference:''
});
fullLengthQuestions.push({
  id:'1708015',
  complexity:'Easy',
  text:'Which of the following elements cannot be used as a sacrificial anode in a cast iron boiler system to prevent corrosion in the cast iron boiler tank?',
  choices:['Magnesium','Zinc','Cadmium','Copper'],
  answer:3,
  blocks:[
    {text:'Per the galvanic series in the <em>NCEES PE Mechanical Reference Handbook: Material Properties: Corrosion</em>:'},
    {text:'Magnesium, cadmium, and zinc are all more active than cast iron and would serve as sacrificial anodes. Copper is less active and would not work.'}
  ],
  reference:'NCEES PE Mechanical Reference Handbook > Material Properties > Corrosion'
});
fullLengthQuestions.push({
  id:'1708016',
  complexity:'Medium',
  text:'Match each reaction type with the start and result phases:',
  image:'Screenshots for development/Questions for full length exam/problem 58 picture.png',
  choices:['A → 4, B → 3, C → 2, D → 1','A → 3, B → 4, C → 2, D → 1','A → 4, B → 3, C → 1, D → 2','A → 4, B → 2, C → 3, D → 1'],
  answer:0,
  blocks:[
    {text:'The letters “E”, “F”, “G” and “H” on the right column create some confusion. By looking at the 4 answers, you can notice that the only letters used are “A”, “B”, “C” and “D” and number 1 to 4. Follow the Binary Phase Diagram definition stated on section 2.9.9'},
    {text:'A. Eutectic&nbsp;&nbsp; to&nbsp; (4) Liquid->Two Solid Phase&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A->4'},
    {text:'B. Eutectoid to (3) Solid-> Two Solid Phases&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; B->3'},
    {text:'C. Peritectic to (2) Liquid +Solid->Solid&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C->2'},
    {text:'D. Peritectoid to (1) Two Solid Phases->Solid&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; D->1'}
  ],
  reference:'NCEES PE Mechanical Reference Handbook > Material Properties > Binary Phase Diagrams'
});
fullLengthQuestions.push({
  id:'1708017',
  complexity:'Easy',
  text:'At what percent-weight carbon and temperature is Iron-Iron carbide completely liquid?',
  choices:['1% carbon and 1200°C','1.5% carbon and 1400°C','4% carbon and 1200°C','4% carbon and 1000°C'],
  answer:2,
  blocks:[{text:'The Iron-Iron Carbide Phase Diagram shows the phases of the mixture. Only answer C is in the completely liquid section of the diagram.'}],
  reference:'NCEES PE Mechanical Reference Handbook > Material Properties > Binary Phase Diagrams'
});
fullLengthQuestions.push({
  id:'1708020',
  complexity:'Easy',
  text:'What material test/mechanical property would be best suited for selecting a steel for Armor plate is that is designed to be resistant to penetration from projectiles:',
  choices:['Fatigue Life','Creep resistance','Conductivity','Hardness'],
  answer:3,
  blocks:[{text:'Hardness is a measure of resistance to penetration.'}],
  reference:'NCEES PE Mechanical Reference Handbook > Material Properties > Material Hardness'
});
fullLengthQuestions.push({
  id:'1708022',
  complexity:'Medium',
  text:'A company needs to use a wide-flange beam in an area that is prone to corrosion. It is decided that aluminum of grade 6061-T6 will be used. The dimension of the beam will be identical to a W24 × 68 beam. How much will the new beam weigh if a 7 ft beam is to be used?',
  choices:['120 lb.','165 lb.','250 lb.','476 lb.'],
  answer:1,
  blocks:[
    {text:'See NCEES PE Mechanical Reference Handbook: Structural Properties.'},
    {text:'A W24 x 68 beam has a cross-sectional area of 20.1 in<sup>2</sup>. This can be multiplied by the beam length to determine volume:'},
    {math:'7 <span class="unit">ft</span> &times; <span class="fraction"><span>12 <span class="unit">in</span></span><span>1 <span class="unit">ft</span></span></span> = 84 <span class="unit">in</span>'},
    {math:'20.1 <span class="unit">in<sup>2</sup></span> &times; 84 <span class="unit">in</span> = 1,688.4 <span class="unit">in<sup>3</sup></span>'},
    {text:'See NCEES PE Mechanical Reference Handbook: Properties of Materials: Material Properties.'},
    {text:'The specific weight of 6061 aluminum is given as 0.098 lb/in<sup>3</sup>. This can be used to find the weight of the beam:'},
    {math:'1,688.4 <span class="unit">in<sup>3</sup></span> &times; 0.098 <span class="fraction"><span>lb</span><span>in<sup>3</sup></span></span> = 165.4 <span class="unit">lb</span>'}
  ],
  reference:'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties\n\nNCEES PE Mechanical Reference Handbook > Structural Properties'
});
fullLengthQuestions.push({
  id:'1708025',
  complexity:'Medium',
  text:'A piston is held on to a connecting rod with a wrist pin. The hole in the connecting rod is to be 10 mm in diameter nominally. Assuming a locational clearance fit is required, what is the maximum radial clearance between the hole and shaft?',
  choices:['0.014 mm','0.035 mm','0.012 mm','0.008 mm'],
  answer:2,
  blocks:[
    {text:'This corresponds to an H7/h6 fit per the table in the <em>NCEES PE Mechanical Reference Handbook: Cylindrical Fits and Tolerances: Tables of Cylindrical Fits and Tolerances.</em>'},
    {text:'Check the table for 10-mm hole basis.'},
    {math:'H<sub>max</sub> = 10.015'},
    {math:'P<sub>min</sub> = 9.991'},
    {math:'<span class="fraction"><span>(H<sub>max</sub> &minus; P<sub>min</sub>)</span><span>2</span></span> = 0.012 <span class="unit">mm</span>'},
    {text:'(divide by 2 to get radial clearance)'}
  ],
  reference:'NCEES PE Mechanical Reference Handbook > Cylindrical Fits and Tolerances > Tables of Cylindrical Fits and Tolerances'
});
fullLengthQuestions.push({
  id:'1708031',
  complexity:'Easy',
  text:'Generally speaking, Finite Element Stress analysis requires that materials be isotropic to best line up with the evaluation because',
  choices:['these are the only materials used in fields that design using FEA.','calculations of internal stresses are simplified when a constant spring constant is used between nodes.','isotropic materials are the best conductors of heat','polytropic materials do not exist.'],
  answer:1,
  blocks:[{text:'Materials with stress and strain properties that are the same regardless of direction or orientation of material are called isotropic. This includes most steels, plastics, and nonferrous metals. In general, limitations of computational power would not allow for FEA meshes to have properties that vary by direction for materials such as wood which has different tensile properties along and against the grain. All other answers are not true.'}],
  reference:''
});
fullLengthQuestions.push({
  id:'1708033',
  complexity:'Easy',
  text:'Surface hardening is used instead of through hardening on steel parts to:',
  choices:['have parts weigh less','increase the magnetism of the part.','hold tighter part tolerances.','have parts that still have ductile inner structures.'],
  answer:3,
  blocks:[{text:'Surface hardening is used to only harden the outer shell of a steel part, leaving the inside more flexible and less prone to shattering'}],
  reference:''
});
fullLengthQuestions.push({
  id:'2021032',
  complexity:'Easy',
  text:'Which of the following formulas represents the axial stress?',
  choices:[
    '&sigma; = <span class="fraction"><span>P</span><span>A</span></span>',
    '&sigma; = <span class="fraction"><span>P</span><span>L</span></span>',
    '&sigma; = <span class="fraction"><span>A</span><span>P</span></span>',
    '&sigma; = <span class="fraction"><span>L</span><span>P</span></span>'
  ],
  answer:0,
  blocks:[{text:'Axial stress is calculated as the force (P) divided by the cross-sectional area (A) of the material.'}],
  reference:'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Strength of Materials > Uniaxial Loading and Deformation'
});
fullLengthQuestions.push({
  id:'20250146',
  complexity:'Easy',
  text:'True or False: Shear stress is highest at the surface of a beam under transverse loading.',
  choices:['True','False'],
  answer:1,
  blocks:[{text:'The maximum shear stress in a beam occurs at the neutral axis, not the surface, when subjected to transverse loading.'}],
  reference:'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Stress Analysis > Beams > Stresses in Beams > Chart: Bending Moment, Vertical Shear, & Deflection of Beams of Uniform Cross Section, Under Various Conditions of Loading.\n\nNCEES PE Mechanical Reference Handbook > Machine Design and Materials > Strength of Materials'
});
fullLengthQuestions.push({
  id:'20251014',
  complexity:'Medium',
  text:'What is the maximum allowable torsional stress for a hard-drawn wire spring (ASTM A227) with a wire diameter of 0.1 in, using the cold-drawn carbon steel rule for shear stress?',
  choices:['85.4 ksi','97.7 ksi','112.5 ksi','126.3 ksi'],
  answer:1,
  blocks:[
    {math:'Minimum tensile strength: S<sub>ut</sub> = <span class="fraction"><span>A</span><span>d<sup>m</sup></span></span>'},
    {math:'Maximum allowable torsional stress: S<sub>ys</sub> = 0.45 &times; S<sub>ut</sub>'},
    {math:'A = 140 <span class="unit">ksi</span>, m = 0.190'},
    {math:'d = 0.1 <span class="unit">in</span>'},
    {math:'d<sup>m</sup> = (0.1)<sup>0.190</sup> = 0.645'},
    {math:'S<sub>ut</sub> = <span class="fraction"><span>140</span><span>0.645</span></span> = 217.1 <span class="unit">ksi</span>'},
    {math:'S<sub>ys</sub> = 0.45 &times; 217.1 = 97.7 <span class="unit">ksi</span>'}
  ],
  reference:'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Mechanical Components > Springs > Mechanical Springs'
});
fullLengthQuestions.push({
  id:'20251015',
  complexity:'Medium',
  fill:true,
  text:'A slider moves along a straight guide. Its velocity is v(t) = 3t² − 12t + 9 (unit/sec). Determine the net displacement of the slider from t = 0 to t = 3 sec.',
  choices:[],
  answer:'0',
  blocks:[
    {math:'&Delta;s = &int;<sub>0</sub><sup>3</sup> v(t)dt + x<sub>0</sub> = &int;<sub>0</sub><sup>3</sup> (3t<sup>2</sup> &minus; 12t + 9)dt, where x<sub>0</sub> = 0'},
    {math:'= [t<sup>3</sup> &minus; 6t<sup>2</sup> + 9t]<sub>0</sub><sup>3</sup> = 27 &minus; 54 + 27 = 0'},
    {text:'Although the slider was moving, its net displacement = 0, meaning it returned to its original position after 3 sec.'}
  ],
  reference:'NCEES PE Mechanical Reference Handbook, v1.0.5 > Machine Design and Materials > Laws of Motion'
});
fullLengthQuestions.push({
  id:'20251041',
  complexity:'Easy',
  text:'True or False: Brazing creates a bond by melting the base materials together.',
  choices:['True','False'],
  answer:1,
  blocks:[{text:'Brazing involves heating a filler material to its melting point, but not the base materials, which remain solid during the bonding process.'}],
  reference:'General Knowledge'
});
fullLengthQuestions.push({
  id:'20251051',
  complexity:'Easy',
  text:'Which type of fastener is commonly used to create a permanent mechanical joint in thin sheet metal assemblies?',
  choices:['Rivets','Snap rings','Cotter pins','Set screws'],
  answer:0,
  blocks:[{text:'Rivets are non-threaded fasteners used to permanently join thin materials, especially sheet metals. Once installed, rivets cannot be removed without destroying the fastener, making them ideal for structural applications requiring permanent joints.'}],
  reference:'General Knowledge'
});
fullLengthQuestions.push({
  id:'20251056',
  complexity:'Easy',
  text:'True or False: In combined loading, the total stress at any point can be found by summing the individual stresses from each loading condition.',
  choices:['True','False'],
  answer:0,
  blocks:[{text:'The total stress in combined loading is determined by the superposition of stresses from the individual loading conditions, provided the material remains within its elastic limits.'}],
  reference:'General Knowledge/ Combined Loading'
});
fullLengthQuestions.push({
  id:'20251063',
  complexity:'Easy',
  text:'True or False: Chemical bonds are often used in place of mechanical fasteners in lightweight applications.',
  choices:['True','False'],
  answer:0,
  blocks:[{text:'Chemical bonding methods like adhesives can be used to join materials in applications where lightweight joints are needed, offering flexibility and high strength without adding significant weight.'}],
  reference:'General Knowledge'
});
fullLengthQuestions.push({
  id:'20251158',
  complexity:'Easy',
  text:'True or False: The material selection for pressurized vessels is based primarily on strength and corrosion resistance.',
  choices:['True','False'],
  answer:0,
  blocks:[{text:'Material selection for pressurized vessels prioritizes strength to withstand internal pressure and corrosion resistance to maintain the vessel\'s integrity under operating conditions.'}],
  reference:''
});
fullLengthQuestions.push({
  id:'20251159',
  complexity:'Easy',
  text:'True or False: Pneumatic actuators are generally used in applications that require high force output.',
  choices:['True','False'],
  answer:1,
  blocks:[{text:'Pneumatic actuators are generally used for lighter applications due to the lower forces produced by compressed air, while hydraulic actuators are used in high-force applications.'}],
  reference:''
});
fullLengthQuestions.push({
  id:'20251160',
  complexity:'Easy',
  text:'True or False: A truss is typically less efficient than a solid beam in handling a given load.',
  choices:['True','False'],
  answer:1,
  blocks:[{text:'A truss is more efficient than a solid beam because it uses a series of interconnected triangular components, distributing loads effectively and using less material.'}],
  reference:''
});
fullLengthQuestions.push({
  id:'20251199',
  complexity:'Easy',
  text:'What is the main purpose of a pressurized vessel in a mechanical system?',
  choices:['To safely contain gases or liquids under high pressure','To improve the aesthetic appearance of the piping system','To increase the temperature of fluids without using external heat','To act as a structural support for rotating machinery'],
  answer:0,
  blocks:[{text:'Pressurized vessels are designed to hold liquids or gases under pressure, often used in systems like boilers, reactors, and air tanks.'}],
  reference:''
});
fullLengthQuestions.push({
  id:'20251201',
  complexity:'Medium',
  text:'A hydraulic cylinder has a piston with a 1-in radius. If 400 psi is applied to the piston via the hydraulic fluid, what force is exerted on the cylinder to extend it?',
  choices:['458 lb','689 lb','1,257 lb','1,363 lb'],
  answer:2,
  blocks:[
    {text:'Use the formula:'},
    {math:'F<sub>R</sub> = <span>(</span><span class="fraction"><span>&pi;D<sub>1</sub><sup>2</sup></span><span>4</span></span><span>)</span>P<sub>R</sub>'},
    {math:'= <span class="fraction"><span>&pi;(2<sup>2</sup>)</span><span>4</span></span>(400 <span class="unit">psi</span>) = 1,256.6 <span class="unit">lb</span>'}
  ],
  reference:'NCEES PE Mechanical Reference Handbook > Hydraulics, Fluids, and Pipe Flow > Fluid Flow Machinery > Force and Pressure to Extend Cylinder'
});
fullLengthQuestions.push({
  id:'20251205',
  complexity:'Easy',
  text:'Real-world problems are often complex and can incorporate varying fields of engineering and expertise. Passenger safety during a car crash is a problem for which it is difficult to predict strengths and weaknesses. What is one method typically used more than others for taking a problem and breaking it down into smaller, less complex, computable elements to help solve the overall problem?',
  choices:['FEA (finite element analysis)','Crash tests with visual data','Kirchoff theory','Nondestructive testing'],
  answer:0,
  blocks:[{text:'Finite element analysis (FEA) is a method used to analyze an object’s behavior or predict its behavior in specific environments based on engineering calculations. For example, FEA can be used in the automotive world to predict structural capabilities during crash testing. It can divide a complex shape into smaller, simpler elements to more accurately compute different values of stress, strain, heat transfer, and other factors. This analysis suggests that a higher-degree polynomial yields a more accurate result.'}],
  reference:''
});
fullLengthQuestions.push({
  id:'20251208',
  complexity:'Easy',
  text:'See the following excerpt from OSHA Safety and Health Regulations for Construction1926 Subpart L App4 Scaffold Specifications:\n\n“1926 Subpart L App A(1)(d)\n\nGuardrails shall be as follows:\n\n1926 Subpart L App A(1)(d)(i)\n\nToprails shall be equivalent in strength to 2-inch by 4-inch lumber; or\n\n1 ¼ inch × 1 ¼ inch structural angle iron; or\n\n1 inch × .070 inch wall steel tubing; or 1.990 inch × .058 inch wall aluminum tubing.\n\n1926 Subpart L App A(1)(d)(ii)\n\nMidrails shall be equivalent in strength to 1 inch by 6 inch lumber; or\n\n1 ¼ inch × 1 ¼ inch × ⅛ inch structural angle iron; or\n\n1 inch × .070 inch wall steel tubing; or\n\n1.990-inch × 0.058-inch wall aluminum tubing.\n\n1926 Subpart L App A(1)(d)(iii)\n\nToeboards shall be equivalent in strength to 1 inch by 4 inch lumber; or\n\n1 ¼ inch × 1 ¼ inch structural angle iron; or\n\n1 inch × .070 inch wall steel tubing; or\n\n1.990 inch × .058 inch wall aluminum tubing.\n\n1926 Subpart L App A(1)(d)(iv)\n\nPosts shall be equivalent in strength to 2-inch by 4-inch lumber; or\n\n1 ¼ inch × 1 ¼ inch × ⅛ structural angle iron; or\n\n1 inch × .070 inch wall steel tubing; or\n\n1.990-inch × 0.058-inch wall aluminum tubing.\n\n1926 Subpart L App A(1)(d)(v)\n\nDistance between posts shall not exceed 8 feet.\n\n1926 Subpart L App A(1)(e)\n\nOverhead protection shall consist of 2 inch nominal planking laid tight, or ¾-inch plywood.\n\n1926 Subpart L App A(1)(f)\n\nScreen installed between toeboards and midrails or toprails shall consist of No. 18 gauge U.S. Standard wire one inch mesh.”\n\nA 1-1/4 in × 1-1/4 in × 2/8 in structural angle iron compliant for use as a guardrail material for use as top rails, midrails, and toeboards?',
  choices:['True','False'],
  answer:0,
  blocks:[{text:'OSHA regulation language states that 1-1/4 in × 1-1/4 in × 1/8 in structural angle iron is equivalent to lumber. A 1/8-inch-thicker piece of iron will still have an equivalent value to the lumber, if not more, than the regulation requires, which will hold up in OSHA’s view of the regulation.'}],
  reference:''
});
fullLengthQuestions.push({
  id:'91706071',
  complexity:'Medium',
  text:'A helical compression spring has a mean diameter of 0.394 inches. The spring is made from ASTM 228 music wire. The spring has a spring index, C = 7. The design requires a 2.25 factor of safety when a 600-lbf load is imparted on the spring. Is the spring sufficient for the task? Yes or no?',
  choices:['Yes','No'],
  answer:1,
  blocks:[
    {text:'Based on NCEES PE Mechanical Reference Handbook > Machine Design > Mechanical Components > Mechanical Springs'},
    {math:'&tau; = K<sub>s</sub> <span class="fraction"><span>8FD</span><span>&pi;d<sup>3</sup></span></span> and C = <span class="fraction"><span>D</span><span>d</span></span>'},
    {text:'C and D are known, so d = D/C = 0.394in./7 = 0.056286in.'},
    {math:'K<sub>s</sub> = <span class="fraction"><span>4C + 2</span><span>4C &minus; 3</span></span> = 1.2'},
    {math:'&tau; = K<sub>s</sub> <span class="fraction"><span>8FD</span><span>&pi;d<sup>3</sup></span></span> = 1.2<span class="fraction"><span>8(600<span class="unit">lbf</span>) 0.394<span class="unit">in</span><sup>2</sup></span><span>&pi;(0.056286<span class="unit">in</span>.)<sup>3</sup></span></span> = 4,053,105 <span class="unit">psi</span>'},
    {math:'S<sub>ut</sub> = <span class="fraction"><span>A</span><span>d<sup>m</sup></span></span> = <span class="fraction"><span>201,000 <span class="unit">psi</span></span><span>0.056286<sup>0.145</sup></span></span> = 305,062 <span class="unit">psi</span>'},
    {math:'&tau;<sub>allow</sub> = <span class="fraction"><span>(0.45)S<sub>ut</sub></span><span>n</span></span> = <span class="fraction"><span>(0.45) 305,062 <span class="unit">psi</span></span><span>2.25</span></span> = 61,012 <span class="unit">psi</span>'},
    {math:'&tau; &gt; &tau;<sub>allow</sub>'}
  ],
  reference:''
});
const fullQuestion16 = fullLengthQuestions.find(question => question.id === '1704042');
if (fullQuestion16) { fullQuestion16.blocks = [{math:'&tau; = <span class="fraction"><span>Tr</span><span>J</span></span>\n\nKt = <span class="fraction"><span>GJ</span><span>L</span></span>\n\n&phi; = <span class="fraction"><span>TL</span><span>GJ</span></span> = <span class="fraction"><span>(2,000 lb-in &times; 6 in)</span><span>11,000 <span class="fraction"><span>lb</span><span>in<sup>2</sup></span></span> &times; &pi; &times; <span class="fraction"><span>3<sup>4</sup> &minus; 1.5<sup>4</sup></span><span>2</span></span> in<sup>4</sup></span></span>'},{text:'Convert the answer from radians to degrees:'},{math:'&phi; = 0.0091456 rad &times; <span class="fraction"><span>180&deg;</span><span>&pi;</span></span>\n\n&phi; = 0.523&deg;'}]; fullQuestion16.reference='NCEES PE Mechanical Handbook> Chapter 1: Basics Engineering Practice > Properties of various Shapes,\nNCEES PE Mechanical Handbook > Chapter 2: Machine Design and Material > Torsional Strain Section 2.11.2'; }
const fullQuestion17 = fullLengthQuestions.find(question => question.id === '1704043');
if (fullQuestion17) fullQuestion17.blocks = [{math:'R<sub>A</sub> = 5 kN\n\nR<sub>B</sub> = 5 kN\n\nM<sub>max</sub> = 5 kN &times; 2 = 10 kN-m'},{text:'Moment of inertia around the cross-section, I:'},{math:'I<sub>xx</sub> = <span class="fraction"><span>1</span><span>12</span></span>(200)(500<sup>3</sup>) &minus; 2 <span class="fraction"><span>1</span><span>12</span></span>((200 &minus; 30)<sup>2</sup>)((500 &minus; 25 &times; 2)<sup>3</sup>) = 792 &times; 10<sup>6</sup> mm<sup>4</sup>\n\n&sigma; = <span class="fraction"><span>Mc</span><span>I<sub>xx</sub></span></span> = <span class="fraction"><span>10 kN-m &times; 0.25 m</span><span>0.000792 m<sup>4</sup></span></span> = 3,156 &asymp; 3,200 KPa'}];
const fullQuestion18 = fullLengthQuestions.find(question => question.id === '1705017');
if (fullQuestion18) fullQuestion18.blocks = [{text:'Given\n\n• Mass: m = 6 kg\n• Spring constant: k = 400 N/m\n• Frequency ratio: r = <span class="fraction"><span>&omega;</span><span>&omega;<sub>n</sub></span></span> = 0.65\n• Damping not mentioned &rarr; assume undamped'},{text:'We’re asked for the maximum amplitude of the force transmitted to the mass.\n\nStatic deflection and reference force\n\nStatic deflection under the weight:'},{math:'x<sub>s</sub> = <span class="fraction"><span>W</span><span>k</span></span> = <span class="fraction"><span>mg</span><span>k</span></span> = <span class="fraction"><span>6 &times; 9.81</span><span>400</span></span> = 0.147 m'},{text:'Corresponding spring force:'},{math:'F<sub>0</sub> = kx<sub>s</sub> = 400 &times; 0.147 = 58.8 N'},{text:'Force transmissibility (base excitation, undamped)\n\nFor base excitation with zero damping, the force transmissibility is:'},{math:'<span class="fraction"><span>F<sub>T</sub></span><span>F<sub>0</sub></span></span> = <span class="fraction"><span>1</span><span>|1 &minus; r<sup>2</sup>|</span></span>\n\nWith r = 0.65:\n\n1 &minus; r<sup>2</sup> = 1 &minus; 0.65<sup>2</sup> = 1 &minus; 0.4225 = 0.5775\n\n<span class="fraction"><span>F<sub>T</sub></span><span>F<sub>0</sub></span></span> = <span class="fraction"><span>1</span><span>0.5775</span></span> = 1.731'},{text:'So the transmitted force amplitude is:'},{math:'F<sub>T</sub> = F<sub>0</sub> &times; <span class="fraction"><span>1</span><span>1 &minus; r<sup>2</sup></span></span> = 58.8 &times; 1.731 &asymp; 101.7 N\n\nF<sub>T</sub> &asymp; 102 N'}];
const fullQuestion19 = fullLengthQuestions.find(question => question.id === '1705025');
if (fullQuestion19) { fullQuestion19.choices = ['<math><mfrac><mi>k</mi><mi>I</mi></mfrac></math>', '<math><msqrt><mfrac><mi>k</mi><mi>I</mi></mfrac></msqrt></math>', '<math><mfrac><mi>I</mi><mi>k</mi></mfrac></math>', '<math><msqrt><mfrac><mi>I</mi><mi>k</mi></mfrac></msqrt></math>']; fullQuestion19.blocks = [{text:'Natural frequency is calculated using the following equation:'},{math:'&omega;<sub>n</sub> = <math><msqrt><mfrac><mi>k</mi><mi>I</mi></mfrac></msqrt></math>'}]; }
if (fullQuestion15) {
  fullQuestion15.blocks = [
    {text:'Concept: Determine safety factor as function of torque (T) and geometry'},
    {math:'Shear stress &tau; = <span class="fraction"><span>Tr</span><span>J</span></span>\n\nSF = <span class="fraction"><span>S<sub>us</sub></span><span>&tau;</span></span> = <span class="fraction"><span>S<sub>us</sub>J</span><span>Tr</span></span>\n\nPolar moment of inertia J = <span class="fraction"><span>&pi;</span><span>2</span></span> &times; (r<sub>o</sub><sup>4</sup> &minus; r<sub>i</sub><sup>4</sup>)'},
    {text:'Solid circular section, J in terms of area:'},
    {math:'A = &pi;r<sup>2</sup>\nr = &radic;(A/&pi;)\nJ = <span class="fraction"><span>&pi;</span><span>2r<sup>4</sup></span></span> = <span class="fraction"><span>&pi;</span><span>2</span></span>(<span class="fraction"><span>A</span><span>&pi;</span></span>)<sup>2</sup> = <span class="fraction"><span>A<sup>2</sup></span><span>2&pi;</span></span>\n&tau; = <span class="fraction"><span>Tr</span><span><span class="fraction"><span>A<sup>2</sup></span><span>2&pi;</span></span></span></span> = <span class="fraction"><span>2&pi;Tr</span><span>A<sup>2</sup></span></span> = <span class="fraction"><span>2T&radic;A/&pi;</span><span>A<sup>2</sup></span></span> = <span class="fraction"><span>2&radic;&pi;T</span><span>A<sup>3/2</sup></span></span>\nSF = <span class="fraction"><span>S<sub>us</sub>A<sup>3/2</sup></span><span>2&radic;&pi;T</span></span> = 0.2821 <span class="fraction"><span>S<sub>us</sub>A<sup>3/2</sup></span><span>T</span></span>'},
    {text:'• Decreasing the applied torque would increase the safety factor.\n• Decreasing the shaft radius would decrease the polar moment of inertia and, therefore, decrease the safety factor.\n• Making the shaft hollow with the same area would increase the polar moment of inertia and, therefore, increase the safety factor.'},
    {text:'Example: Thin-walled shaft with thickness'},
    {math:'t = <span class="fraction"><span>r</span><span>10</span></span>, same area\nA = 2&pi;r &times; t = <span class="fraction"><span>2&pi;</span><span>10</span></span>r<sup>2</sup> = <span class="fraction"><span>&pi;</span><span>5</span></span>r<sup>2</sup>\nr = &radic;(<span class="fraction"><span>5A</span><span>&pi;</span></span>)\nJ = <span class="fraction"><span>&pi;</span><span>2</span></span> &times; (r<sup>4</sup> &minus; (0.9r)<sup>4</sup>) = <span class="fraction"><span>&pi;</span><span>2</span></span>r<sup>4</sup>(1 &minus; 0.9<sup>4</sup>) = 1.368 A<sup>2</sup>\nSF = 1.085 <span class="fraction"><span>S<sub>us</sub>A<sup>3/2</sup></span><span>T</span></span>'},
    {text:'• Turning the shaft into a square section of the same area would decrease the ratio of polar moment of inertia to an extreme radius (J/r) and, thus, decrease the safety factor.\n\nComparison of square section, side length l, same area:'},
    {math:'A = l<sup>2</sup>\nl = &radic;A\nJ = <span class="fraction"><span>l<sup>4</sup></span><span>6</span></span> = <span class="fraction"><span>A<sup>2</sup></span><span>6</span></span>\n\nFurthest distance from centroid to part of cross-section: r = l/&radic;2\n\n&tau; = <span class="fraction"><span>T(l/&radic;2)</span><span>A<sup>2</sup>/6</span></span> = <span class="fraction"><span>6T</span><span>&radic;2 A<sup>3/2</sup></span></span>\nSF = 0.2357 <span class="fraction"><span>S<sub>us</sub>A<sup>3/2</sup></span><span>T</span></span>'},
    {text:'Square cross-section has a smaller safety factor.'}
  ];
  fullQuestion15.blocks[6].math = 't = <span class="fraction"><span>r</span><span>10</span></span>, same area\n\nA = 2&pi;r &times; t = <span class="fraction"><span>2&pi;</span><span>10</span></span>r<sup>2</sup> = <span class="fraction"><span>&pi;</span><span>5</span></span>r<sup>2</sup>\n\nr = &radic;(<span class="fraction"><span>5A</span><span>&pi;</span></span>)\n\nJ = <span class="fraction"><span>&pi;</span><span>2</span></span> &times; (r<sup>4</sup> &minus; (0.9r)<sup>4</sup>) = <span class="fraction"><span>&pi;</span><span>2</span></span> &times; r<sup>4</sup>(1 &minus; 0.9<sup>4</sup>) = <span class="fraction"><span>&pi;</span><span>2</span></span> &times; (<span class="fraction"><span>5A</span><span>&pi;</span></span>)<sup>2</sup>(1 &minus; 0.9<sup>4</sup>) = 1.368 A<sup>2</sup>\n\nSF = <span class="fraction"><span>S<sub>us</sub>J</span><span>Tr</span></span> = <span class="fraction"><span>S<sub>us</sub>1.368 A<sup>2</sup></span><span>T&radic;(<span class="fraction"><span>5A</span><span>&pi;</span></span>)</span></span> = 1.085 <span class="fraction"><span>S<sub>us</sub>A<sup>3/2</sup></span><span>T</span></span>';
  fullQuestion15.blocks[8].math = 'A = l<sup>2</sup>\nl = &radic;A\n\nJ = <span class="fraction"><span>l<sup>4</sup></span><span>6</span></span> = <span class="fraction"><span>A<sup>2</sup></span><span>6</span></span>\n\nFurthest distance from centroid to part of cross-section: r = l/&radic;2\n\n&tau; = <span class="fraction"><span>T(l/&radic;2)</span><span>A<sup>2</sup>/6</span></span> = <span class="fraction"><span>6T&ell;</span><span>&radic;2 A<sup>2</sup></span></span> = <span class="fraction"><span>6T&radic;A</span><span>&radic;2 A<sup>2</sup></span></span> = <span class="fraction"><span>6T</span><span>&radic;2 A<sup>3/2</sup></span></span>\n\nSF = <span class="fraction"><span>S<sub>us</sub>A<sup>3/2</sup>&radic;2</span><span>6T</span></span> = 0.2357 <span class="fraction"><span>S<sub>us</sub>A<sup>3/2</sup></span><span>T</span></span>';
  fullQuestion15.blocks[3].math = 'A = &pi;r<sup>2</sup>\nr = &radic;(A/&pi;)\nJ = <span class="fraction"><span>&pi;</span><span>2r<sup>4</sup></span></span> = <span class="fraction"><span>&pi;</span><span>2</span></span>(A/&pi;)<sup>2</sup> = <span class="fraction"><span>A<sup>2</sup></span><span>2&pi;</span></span>\n&tau; = <span class="fraction"><span>Tr</span><span><span class="fraction"><span>A<sup>2</sup></span><span>2&pi;</span></span></span></span> = <span class="fraction"><span>2&pi;Tr</span><span>A<sup>2</sup></span></span> = <span class="fraction"><span>2T&radic;(&pi;)</span><span>A<sup>3/2</sup></span></span>\nSF = <span class="fraction"><span>S<sub>us</sub>A<sup>3/2</sup></span><span>2&radic;(&pi;)T</span></span> = 0.2821 <span class="fraction"><span>S<sub>us</sub>A<sup>3/2</sup></span><span>T</span></span>';
}

let activeQuizName = 'Basic Engineering Practice Quiz';
const sourceQuizConfigs = {
  materials: { name: 'Mechanics of Materials Quiz', file: 'Screenshots for development/Questions for Mechanics of Materials/Questions.txt', solutionDir: 'Screenshots for development/Solutions for Mechanics of Materials', shots: '163826 163843 163902 163913 163924', images: { 1: 'Screenshots for development/Questions for Mechanics of Materials/problem 2 image.png', 2: 'Screenshots for development/Questions for Mechanics of Materials/problem 3 image figure 1.png' } },
  transmission: { name: 'Power Transmission Quiz', file: 'Screenshots for development/Questions for Power Transmission/Questions.txt', solutionDir: 'Screenshots for development/Solutions for Power Transmission', shots: '164454 164614 164651 164709 164743' },
  supportive: { name: 'Supportive Knowledge (Machine Design and Materials) Quiz', file: 'Screenshots for development/Questions for Supportive Knowledge/Questions.txt', solutionDir: 'Screenshots for development/Solutions for  Supportive Knowledge', shots: '165258 165503 165516 165529 165546', images: { 3: 'Screenshots for development/Questions for Supportive Knowledge/picture for problem 4.jpg' } },
  full: { name: 'Full Length Exam', file: 'Screenshots for development/Questions for full length exam/Questions.txt', solutionDir: 'Screenshots for development/Solutions for full length exam', shots: '172852 173013 173147 173303 185512 185527 185534 185548 185554 185602 185609 185615 185622 185627 185703 185720 185728 185735 185741 185752 185758 185803 185822 185855 185901 185907 185913 185918 185923 185935 185954 190000 190006 190024 190029 190034 190040 190045 190051 190056 190102 190107 190113 190123 190139 190149 190201 190205 190210 190215 190230 190238 190243 190247 190252 190256 190304 190309 190315 190319 190323 190328 190332 190336 190343 190346 190351 190355 190359 190402 190406 190409 190415 190419 190422 190426 190431 190435 190444 190452', images: { 1: 'Screenshots for development/Questions for full length exam/problem 2 picture.jpg', 2: 'Screenshots for development/Questions for full length exam/problem 3 picture.png', 4: 'Screenshots for development/Questions for full length exam/problem 5 picture.png', 9: 'Screenshots for development/Questions for full length exam/problem 10 picture.png', 12: 'Screenshots for development/Questions for full length exam/problem 13 picture.jpg', 16: 'Screenshots for development/Questions for full length exam/problem 17 picture.png', 29: 'Screenshots for development/Questions for full length exam/problem 30 picture.jpg', 43: 'Screenshots for development/Questions for full length exam/problem 44 picture.png', 45: 'Screenshots for development/Questions for full length exam/problem 46 picture.jpg', 47: 'Screenshots for development/Questions for full length exam/problem 48 picture.png', 49: 'Screenshots for development/Questions for full length exam/problem 50 picture.png', 50: 'Screenshots for development/Questions for full length exam/problem 51 picture.png', 53: 'Screenshots for development/Questions for full length exam/problem 54 picture.png', 55: 'Screenshots for development/Questions for full length exam/problem 56 picture.png', 57: 'Screenshots for development/Questions for full length exam/problem 58 picture.png' } }
};
function parseSourceQuestions(raw, config) {
  return raw.split(/(?=Question ID:\s*\d+)/).filter(part=>/Question ID:/.test(part)).map((part, index)=>{
    const id=(part.match(/Question ID:\s*(\d+)/)||[])[1]||String(index+1); const lines=part.split(/\r?\n/).slice(1); const choiceStart=lines.findIndex(line=>/^\s*(?:O|☐|Ο|ÎŸ|â˜)?\s*[A-F]\./.test(line));
    const text=lines.slice(0,choiceStart<0?lines.length:choiceStart).join('\n').replace(/(?:insert|Insert) (?:question|problem|figure).*?(?:here|Figure 1)?/g,'').trim();
    const choices=lines.slice(Math.max(0,choiceStart)).filter(line=>/^\s*(?:O|☐|Ο|ÎŸ|â˜)?\s*[A-F]\./.test(line)).map(line=>line.replace(/^\s*(?:O|☐|Ο|ÎŸ|â˜)?\s*[A-F]\.\s*/,''));
    const shot=(config.shots||'').split(' ')[index]; return { id, complexity: 'Medium', text, choices, answer: -1, image: config.images?.[index], sourceSolution: shot ? `${config.solutionDir}/Screenshot 2026-10-20 ${shot}.png` : null };
  });
}
async function startExam(quiz='basic') {
  if(!handbookUrl){ startAfterUpload=quiz; $('#handbook-upload').click(); return; }
  if(quiz==='materials') {
    questions=materialsQuestions; activeQuizName='Mechanics of Materials Quiz';
  } else if(quiz==='transmission') {
    questions=transmissionQuestions; activeQuizName='Power Transmission Quiz';
  } else if(quiz==='supportive') {
    questions=supportiveQuestions; activeQuizName='Supportive Knowledge (Machine Design and Materials) Quiz';
  } else if(quiz==='full') {
    questions=fullLengthQuestions; activeQuizName='Full Length Exam';
  } else if(sourceQuizConfigs[quiz]) {
    const config=sourceQuizConfigs[quiz];
    try { const response=await fetch(encodeURI(config.file)); if(!response.ok) throw new Error(); questions=parseSourceQuestions(await response.text(),config); }
    catch { alert('This quiz needs to be opened through a local web server or GitHub Pages so its question source can load.'); return; }
    activeQuizName=config.name;
  } else { questions=quiz==='mechanical'?mechanicalQuestions:quiz==='components'?componentsQuestions:basicQuestions; activeQuizName=quiz==='mechanical'?'Mechanical Attachments Quiz':quiz==='components'?'Mechanical Components and Assemblies Quiz':'Basic Engineering Practice Quiz'; }
  current=0; answers=Array(questions.length).fill(null); flags=Array(questions.length).fill(false); seconds=quiz==='full'?8*60*60:20*60;
  $('#exam-title').textContent=activeQuizName; $('#total-number').textContent=questions.length; $('#timer').textContent=formatTimer(seconds); $('#handbook-viewer').src=handbookUrl; $('#handbook-viewer').classList.remove('hidden'); $('#reference-empty').classList.add('hidden'); show('#exam-view'); renderQuestion(); clearInterval(timerId); timerId=setInterval(tick,1000);
}

let current = 0, answers = Array(questions.length).fill(null), flags = Array(questions.length).fill(false), seconds = 20 * 60, timerId;
let handbookUrl = null, handbookName = '', startAfterUpload = false;
const $ = (s) => document.querySelector(s);

function renderMenu(){ $('#exam-rows').innerHTML = exams.map((exam,index) => `<div class="exam-row"><span>${exam.name}</span><span>${exam.description}</span><a class="upload-reference" data-exam="${index}">${handbookName && exam.available ? 'Handbook loaded: '+handbookName : 'Upload Reference Manual'}</a>${exam.available ? `<button class="take-test" data-exam="${index}">Start Test</button>` : '<span class="take-test muted">Start Test</span>'}<span class="chevron">⌄</span></div>`).join(''); document.querySelectorAll('button.take-test').forEach(button=>button.addEventListener('click',()=>startExam(exams[+button.dataset.exam].quiz))); document.querySelectorAll('.upload-reference').forEach(link=>link.addEventListener('click',()=>{startAfterUpload=false;$('#handbook-upload').click();})); }
function show(view){ document.querySelectorAll('.view').forEach(e=>e.classList.add('hidden')); $(view).classList.remove('hidden'); }
function formatTimer(totalSeconds){ const hours=Math.floor(totalSeconds/3600), minutes=Math.floor(totalSeconds%3600/60), secondsRemaining=totalSeconds%60; return hours?`${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(secondsRemaining).padStart(2,'0')}`:`${String(minutes).padStart(2,'0')}:${String(secondsRemaining).padStart(2,'0')}`; }
function tick(){ seconds=Math.max(0,seconds-1); $('#timer').textContent=formatTimer(seconds); if(!seconds){clearInterval(timerId); submitExam();} }
function renderQuestion(){ const q=questions[current]; $('#question-id').textContent=q.id; $('#question-text').textContent=q.text; $('#current-number').textContent=current+1; $('#flag-label').textContent=flags[current]?'Remove Flag':'Flag for Review'; $('#previous').style.visibility=current?'visible':'hidden'; $('#next').textContent=current===questions.length-1?'Review Questions':'Next →'; const oldImage=$('.question-image'); if(oldImage) oldImage.remove(); if(q.image){const image=document.createElement('img');image.src=q.image;image.alt='Question reference table';image.className='question-image';$('#question-text').after(image);} $('#answers').innerHTML=q.choices.map((c,i)=>`<label class="answer"><input type="radio" name="answer" value="${i}" ${answers[current]===i?'checked':''}><span>${String.fromCharCode(65+i)}. ${c}</span></label>`).join(''); document.querySelectorAll('input[name="answer"]').forEach(input=>input.addEventListener('change',e=>{answers[current]=Number(e.target.value);})); }
function reviewRows(filter='all'){ const rows=questions.map((q,i)=>({q,i})).filter(({i})=>filter==='all'||(filter==='flagged'&&flags[i])||(filter==='unanswered'&&answers[i]===null)); $('#review-table').innerHTML='<div class="review-header"><span>Question</span><span>Answered</span><span>Flagged</span></div>'+rows.map(({i})=>`<div class="review-row" data-question="${i}"><strong>Question ${i+1}</strong><span>${answers[i]===null?'No':'Yes'}</span><span>${flags[i]?'Yes':'No'}</span></div>`).join(''); $('#review-scroll').scrollTop=0; document.querySelectorAll('.review-row').forEach(row=>row.addEventListener('click',()=>{current=+row.dataset.question; closeModal('review-modal');renderQuestion();})); }
function openModal(id){ $('#'+id).classList.remove('hidden'); }
function closeModal(id){ $('#'+id).classList.add('hidden'); }
function submitExam(){clearInterval(timerId); document.querySelectorAll('.modal').forEach(m=>m.classList.add('hidden')); show('#results-view'); renderResults();}
function renderResults(){ const correct=answers.reduce((n,a,i)=>n+(a===questions[i].answer),0), incorrect=answers.filter(a=>a!==null).length-correct, unanswered=answers.filter(a=>a===null).length, percent=Math.round(correct/questions.length*100); $('#results-title').textContent='Basic Engineering Practice Quiz'; $('#score-label').textContent=percent+'%'; $('#score-ring-label').textContent=percent+'%'; $('#result-total').textContent=questions.length; $('#correct-count').textContent=correct; $('#incorrect-count').textContent=incorrect; $('#unattempted-count').textContent=unanswered; $('#correct-bar').style.width=percent+'%'; ['Easy','Medium'].forEach(c=>{const set=questions.filter(q=>q.complexity===c); const score=Math.round(set.filter(q=>answers[questions.indexOf(q)]===q.answer).length/set.length*100)||0; $('#'+c.toLowerCase()+'-score').textContent=score+'%';}); $('#summary-table').innerHTML='<div class="summary-header"><span></span><span>S.No</span><span>Question ID</span><span>Questions</span><span>Result</span></div>'+questions.map((q,i)=>{const a=answers[i],status=a===null?'−':a===q.answer?'✓':'×',className=a===null?'status-empty':a===q.answer?'status-correct':'status-incorrect';return `<div class="summary-row"><span class="${className}">${status}</span><span>${i+1}</span><a data-solution="${i}">${q.id}</a><span>${q.text.slice(0,95)}${q.text.length>95?'…':''}</span><span>${a===null?'Not attempted':a===q.answer?'Correct':'Incorrect'}</span></div>`;}).join(''); document.querySelectorAll('[data-solution]').forEach(link=>link.addEventListener('click',()=>showSolution(+link.dataset.solution))); }
function showSolution(index){const q=questions[index],answer=answers[index],isCorrect=answer===q.answer,score=Math.round(answers.reduce((n,a,i)=>n+(a===questions[i].answer),0)/questions.length*100); $('#solution-number').textContent=index+1; $('#solution-id').textContent=q.id; $('#solution-score').textContent=`Test Result: ${score}%`; $('#solution-text').textContent=q.text; $('#solution-choices').innerHTML=q.choices.map(choice=>`<li>${choice}</li>`).join(''); $('#solution-status').textContent=answer===null?'−':isCorrect?'✓':'×'; $('#solution-status').className=answer===null?'status-empty':isCorrect?'status-correct':'status-incorrect'; $('#chosen-option').textContent=answer===null?'Not attempted':String.fromCharCode(65+answer); $('#correct-option').textContent=String.fromCharCode(65+q.answer); $('#solution-explanation').innerHTML=q.solution.split('\n\n').map(p=>`<p>${p}</p>`).join(''); $('#solution-formulas').innerHTML=(q.formulas||[]).map(src=>`<img src="${src}" alt="Solution formula">`).join(''); $('#solution-reference').textContent=q.reference; const image=$('#solution-image'); if(q.image){image.src=q.image;image.classList.remove('hidden');}else{image.removeAttribute('src');image.classList.add('hidden');} show('#solution-view');}

renderMenu();
$('#handbook-upload').addEventListener('change', event=>{const file=event.target.files[0]; if(!file) return; if(file.type!=='application/pdf' && !file.name.toLowerCase().endsWith('.pdf')){alert('Please select a PDF handbook.'); event.target.value=''; return;} if(handbookUrl) URL.revokeObjectURL(handbookUrl); handbookUrl=URL.createObjectURL(file); handbookName=file.name; renderMenu(); if(startAfterUpload){const quiz=startAfterUpload;startAfterUpload=false;startExam(quiz);}});
$('#change-handbook').addEventListener('click',()=>{$('#handbook-upload').click();});
$('#previous').addEventListener('click',()=>{if(current){current--;renderQuestion();}});
$('#next').addEventListener('click',()=>{if(current<questions.length-1){current++;renderQuestion();}else{reviewRows();openModal('review-modal');}});
$('#flag-button').addEventListener('click',()=>{flags[current]=!flags[current];renderQuestion();});
$('#review-button').addEventListener('click',()=>{reviewRows();openModal('review-modal');});
$('#scratch-button').addEventListener('click',()=>openModal('scratch-modal'));
$('#end-exam').addEventListener('click',()=>openModal('submit-modal'));
$('#submit-exam').addEventListener('click',()=>openModal('submit-modal'));
$('#confirm-submit').addEventListener('click',submitExam);
$('#review-all').addEventListener('click',()=>reviewRows()); $('#review-flagged').addEventListener('click',()=>reviewRows('flagged')); $('#review-unanswered').addEventListener('click',()=>reviewRows('unanswered'));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>closeModal(b.dataset.close)));
$('#restart-link').addEventListener('click',e=>{e.preventDefault(); const quiz=Object.entries(sourceQuizConfigs).find(([,config])=>config.name===activeQuizName)?.[0] || (activeQuizName==='Mechanical Attachments Quiz'?'mechanical':activeQuizName==='Mechanical Components and Assemblies Quiz'?'components':'basic'); startExam(quiz);});
$('#back-to-results').addEventListener('click',()=>show('#results-view'));
$('#fullscreen-button').addEventListener('click',()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen());

function renderResults(){
  const correct=answers.reduce((n,a,i)=>n+(a===questions[i].answer),0), incorrect=answers.filter(a=>a!==null).length-correct, unanswered=answers.filter(a=>a===null).length, percent=Math.round(correct/questions.length*100);
  $('#results-title').textContent=activeQuizName; $('#score-label').textContent=percent+'%'; $('#score-ring-label').textContent=percent+'%'; $('#result-total').textContent=questions.length; $('#correct-count').textContent=correct; $('#incorrect-count').textContent=incorrect; $('#unattempted-count').textContent=unanswered; $('#correct-bar').style.width=percent+'%';
  ['Easy','Medium'].forEach(c=>{const set=questions.filter(q=>q.complexity===c); const score=set.length?Math.round(set.filter(q=>answers[questions.indexOf(q)]===q.answer).length/set.length*100):0; $('#'+c.toLowerCase()+'-score').textContent=score+'%';});
  $('#summary-table').innerHTML='<div class="summary-header"><span></span><span>S.No</span><span>Question ID</span><span>Questions</span><span>Result</span></div>'+questions.map((q,i)=>{const a=answers[i],status=a===null?'−':a===q.answer?'✓':'×',className=a===null?'status-empty':a===q.answer?'status-correct':'status-incorrect'; return `<div class="summary-row"><span class="${className}">${status}</span><span>${i+1}</span><a data-solution="${i}">${q.id}</a><span>${q.text.slice(0,95)}${q.text.length>95?'…':''}</span><span>${a===null?'Not attempted':a===q.answer?'Correct':'Incorrect'}</span></div>`;}).join('');
  document.querySelectorAll('[data-solution]').forEach(link=>link.addEventListener('click',()=>showSolution(+link.dataset.solution)));
}

function showSolution(index){
  const q=questions[index],answer=answers[index],isCorrect=answer===q.answer,score=Math.round(answers.reduce((n,a,i)=>n+(a===questions[i].answer),0)/questions.length*100);
  document.querySelectorAll('.solution-card > :not(.solution-footer)').forEach(element=>element.classList.remove('hidden'));
  $('#solution-title').textContent=activeQuizName; $('#solution-number').textContent=index+1; $('#solution-id').textContent=q.id; $('#solution-score').textContent=`Test Result: ${score}%`; $('#solution-text').textContent=q.text; $('#solution-choices').innerHTML=q.choices.map(choice=>`<li>${choice}</li>`).join('');
  $('#solution-status').textContent=answer===null?'−':isCorrect?'✓':'×'; $('#solution-status').className=answer===null?'status-empty':isCorrect?'status-correct':'status-incorrect'; $('#chosen-option').textContent=answer===null?'−':String.fromCharCode(65+answer); $('#correct-option').textContent=String.fromCharCode(65+q.answer);
  $('#solution-previous').disabled=index===0; $('#solution-next').disabled=index===questions.length-1; $('#solution-previous').onclick=()=>showSolution(index-1); $('#solution-next').onclick=()=>showSolution(index+1);
  const blocks=q.blocks||q.solution.split('\n\n').map(text=>({text})); $('#solution-explanation').innerHTML=blocks.map(block=>block.formula?`<img class="inline-formula" src="${block.formula}" alt="Solution formula">`:`<p>${block.text}</p>`).join(''); $('#solution-formulas').innerHTML=''; $('#solution-reference').textContent=q.reference||'';
  const image=$('#solution-image'); if(q.image){image.src=q.image;image.classList.remove('hidden');}else{image.removeAttribute('src');image.classList.add('hidden');} show('#solution-view');
}

$('#close-solution').addEventListener('click',()=>show('#results-view'));

function answerIsCorrect(question, answer) {
  if (Array.isArray(question.answer)) {
    return Array.isArray(answer) && answer.length === question.answer.length && question.answer.every(value => answer.includes(value));
  }
  return answer === question.answer;
}

function optionLabel(answer) {
  return Array.isArray(answer) ? answer.map(value => String.fromCharCode(65 + value)).join(',') : String.fromCharCode(65 + answer);
}

function renderQuestion() {
  const question = questions[current];
  $('#question-id').textContent = question.id;
  $('#question-text').textContent = question.text;
  $('#current-number').textContent = current + 1;
  $('#flag-label').textContent = flags[current] ? 'Remove Flag' : 'Flag for Review';
  $('#previous').style.visibility = current ? 'visible' : 'hidden';
  $('#next').textContent = current === questions.length - 1 ? 'Review Questions' : 'Next →';

  const oldImage = $('.question-image');
  if (oldImage) oldImage.remove();
  if (question.image) {
    const image = document.createElement('img');
    image.src = question.image;
    image.alt = 'Question reference material';
    image.className = 'question-image';
    $('#question-text').after(image);
  }

  if (question.fill) {
    $('#answers').innerHTML = `<label class="answer fill-answer"><span>Answer:</span><input type="text" inputmode="decimal" value="${answers[current] ?? ''}" aria-label="Answer"></label>`;
    $('#answers input').addEventListener('input', event => { answers[current] = event.target.value.trim() || null; });
    return;
  }

  const inputType = question.multiple ? 'checkbox' : 'radio';
  const selected = question.multiple ? (answers[current] || []) : answers[current];
  $('#answers').innerHTML = question.choices.map((choice, index) => `<label class="answer"><input type="${inputType}" name="answer" value="${index}" ${question.multiple ? (selected.includes(index) ? 'checked' : '') : (selected === index ? 'checked' : '')}><span>${String.fromCharCode(65 + index)}. ${choice}</span></label>`).join('');
  document.querySelectorAll('input[name="answer"]').forEach(input => input.addEventListener('change', event => {
    if (!question.multiple) {
      answers[current] = Number(event.target.value);
      return;
    }
    answers[current] = [...document.querySelectorAll('input[name="answer"]:checked')].map(checked => Number(checked.value));
  }));
}

function renderResults() {
  const correct = answers.reduce((total, answer, index) => total + Number(answerIsCorrect(questions[index], answer)), 0);
  const incorrect = answers.filter(answer => answer !== null).length - correct;
  const unanswered = answers.filter(answer => answer === null).length;
  const percent = Math.round(correct / questions.length * 100);
  $('#results-title').textContent = activeQuizName;
  $('#score-label').textContent = percent + '%';
  $('#score-ring-label').textContent = percent + '%';
  $('#result-total').textContent = questions.length;
  $('#correct-count').textContent = correct;
  $('#incorrect-count').textContent = incorrect;
  $('#unattempted-count').textContent = unanswered;
  $('#correct-bar').style.width = percent + '%';
  ['Easy', 'Medium'].forEach(complexity => {
    const set = questions.filter(question => question.complexity === complexity);
    const score = set.length ? Math.round(set.filter(question => answerIsCorrect(question, answers[questions.indexOf(question)])).length / set.length * 100) : 0;
    $('#' + complexity.toLowerCase() + '-score').textContent = score + '%';
  });
  $('#summary-table').innerHTML = '<div class="summary-header"><span></span><span>S.No</span><span>Question ID</span><span>Questions</span><span>Result</span></div>' + questions.map((question, index) => {
    const answer = answers[index];
    const correctAnswer = answerIsCorrect(question, answer);
    const status = answer === null ? '−' : correctAnswer ? '✓' : '×';
    const className = answer === null ? 'status-empty' : correctAnswer ? 'status-correct' : 'status-incorrect';
    const result = answer === null ? 'Not attempted' : correctAnswer ? 'Correct' : 'Incorrect';
    return `<div class="summary-row"><span class="${className}">${status}</span><span>${index + 1}</span><a data-solution="${index}">${question.id}</a><span>${question.text.slice(0, 95)}${question.text.length > 95 ? '…' : ''}</span><span>${result}</span></div>`;
  }).join('');
  document.querySelectorAll('[data-solution]').forEach(link => link.addEventListener('click', () => showSolution(+link.dataset.solution)));
}

function showSolution(index) {
  const question = questions[index];
  const answer = answers[index];
  const isCorrect = answerIsCorrect(question, answer);
  const score = Math.round(answers.reduce((total, value, answerIndex) => total + Number(answerIsCorrect(questions[answerIndex], value)), 0) / questions.length * 100);
  document.querySelectorAll('.solution-card > :not(.solution-footer)').forEach(element => element.classList.remove('hidden'));
  $('#solution-title').textContent = activeQuizName;
  $('#solution-number').textContent = index + 1;
  $('#solution-id').textContent = question.id;
  $('#solution-score').textContent = `Test Result: ${score}%`;
  $('#solution-text').textContent = question.text;
  $('#solution-choices').innerHTML = question.choices.map(choice => `<li>${choice}</li>`).join('');
  $('#solution-status').textContent = answer === null ? '−' : isCorrect ? '✓' : '×';
  $('#solution-status').className = answer === null ? 'status-empty' : isCorrect ? 'status-correct' : 'status-incorrect';
  $('#chosen-option').textContent = answer === null ? '−' : question.fill ? answer : optionLabel(answer);
  $('#correct-option').textContent = question.fill ? question.answer : optionLabel(question.answer);
  $('#solution-previous').disabled = index === 0;
  $('#solution-next').disabled = index === questions.length - 1;
  $('#solution-previous').onclick = () => showSolution(index - 1);
  $('#solution-next').onclick = () => showSolution(index + 1);
  const blocks = question.blocks || question.solution.split('\n\n').map(text => ({ text }));
  $('#solution-explanation').innerHTML = blocks.map(block => block.formula ? `<img class="inline-formula" src="${block.formula}" alt="Solution formula">` : block.image ? `<img class="solution-diagram" src="${block.image}" alt="Solution diagram">` : block.mathml ? `<div class="math-line">${block.mathml}</div>` : block.math ? `<div class="math-line">${block.math}</div>` : `<p>${block.text}</p>`).join('');
  $('#solution-formulas').innerHTML = '';
  $('#solution-reference').textContent = question.reference || '';
  const image = $('#solution-image');
  if (question.image) { image.src = question.image; image.classList.remove('hidden'); }
  else { image.removeAttribute('src'); image.classList.add('hidden'); }
  show('#solution-view');
}
