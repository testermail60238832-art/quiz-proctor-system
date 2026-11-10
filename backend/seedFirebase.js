const { rtdb } = require('./src/config/firebase');
const bcrypt = require('bcrypt');

async function seed() {
  if (!rtdb) {
    console.error('\n❌ ERROR: Firebase Realtime Database is not initialized!');
    console.error('Please make sure you have:');
    console.error('1. Set FIREBASE_DATABASE_URL in backend/.env');
    console.error('2. Placed serviceAccountKey.json in the backend/ directory (or configured FIREBASE_SERVICE_ACCOUNT_JSON)\n');
    process.exit(1);
  }

  console.log('Seeding Firebase Realtime Database with initial data...');

  try {
    // 1. Seed Admins (Default password: admin)
    const passwordHash = await bcrypt.hash('admin', 10);
    const admins = {
      admin: {
        username: 'admin',
        password_hash: passwordHash,
        must_change_password: false,
        created_at: Date.now()
      },
      admin1: {
        username: 'admin1',
        password_hash: passwordHash,
        must_change_password: false,
        created_at: Date.now()
      },
      admin2: {
        username: 'admin2',
        password_hash: passwordHash,
        must_change_password: false,
        created_at: Date.now()
      }
    };
    await rtdb.ref('admins').set(admins);
    console.log('✔ Admins created (admin, admin1 & admin2 / password: admin)');

    // 2. Seed Rooms
    const rooms = {
      room_1: {
        id: 'room_1',
        room_code: 'ECE-R1',
        room_name: 'Tech MCQs',
        time_per_question: 30,
        is_active: true,
        created_at: Date.now()
      },
      room_2: {
        id: 'room_2',
        room_code: 'ECE-R2',
        room_name: 'Circuit & Code Arena',
        time_per_question: 30,
        is_active: true,
        created_at: Date.now()
      }
    };
    await rtdb.ref('rooms').set(rooms);
    console.log('✔ Rooms created (ECE-R1: Tech MCQs & ECE-R2: Circuit & Code Arena)');

    // 3. Seed Question Placeholders (Room 1: 30 Questions)
    const questions = {
      room_1: {
        q1: {
          id: 'q1',
          question_text: 'Which machine converts mechanical energy into electrical energy?',
          option_a: 'Motor',
          option_b: 'Generator',
          option_c: 'Transformer',
          option_d: 'Compressor',
          correct_option: 'B',
          marks: 1,
          is_active: true
        },
        q2: {
          id: 'q2',
          question_text: 'Which instrument is used to measure atmospheric pressure?',
          option_a: 'Barometer',
          option_b: 'Ammeter',
          option_c: 'Speedometer',
          option_d: 'Hygrometer',
          correct_option: 'A',
          marks: 1,
          is_active: true
        },
        q3: {
          id: 'q3',
          question_text: 'Which material acts as the main binding material in ordinary concrete?',
          option_a: 'Sand',
          option_b: 'Cement',
          option_c: 'Gravel',
          option_d: 'Water',
          correct_option: 'B',
          marks: 1,
          is_active: true
        },
        q4: {
          id: 'q4',
          question_text: 'Which technology allows machines to learn from data?',
          option_a: 'Artificial Intelligence',
          option_b: 'Bluetooth',
          option_c: 'GPS',
          option_d: 'HTML',
          correct_option: 'A',
          marks: 1,
          is_active: true
        },
        q5: {
          id: 'q5',
          question_text: 'What is the full form of URL?',
          option_a: 'Uniform Resource Locator',
          option_b: 'Universal Record Link',
          option_c: 'Uniform Read Line',
          option_d: 'User Resource Location',
          correct_option: 'A',
          marks: 1,
          is_active: true
        },
        q6: {
          id: 'q6',
          question_text: 'Which electromagnetic wave has the highest frequency?',
          option_a: 'Radio waves',
          option_b: 'Microwaves',
          option_c: 'X-rays',
          option_d: 'Gamma rays',
          correct_option: 'D',
          marks: 1,
          is_active: true
        },
        q7: {
          id: 'q7',
          question_text: 'Which technology allows computers to learn from data without being explicitly programmed for every task?',
          option_a: 'Machine Learning',
          option_b: 'Cloud Computing',
          option_c: 'Blockchain',
          option_d: 'Virtual Reality',
          correct_option: 'A',
          marks: 1,
          is_active: true
        },
        q8: {
          id: 'q8',
          question_text: 'Which technology is mainly associated with Bitcoin?',
          option_a: 'Blockchain',
          option_b: 'IoT',
          option_c: 'Robotics',
          option_d: 'Quantum Computing',
          correct_option: 'A',
          marks: 1,
          is_active: true
        },
        q9: {
          id: 'q9',
          question_text: 'What is the main purpose of a neural network?',
          option_a: 'Mimic certain aspects of how the brain processes information',
          option_b: 'Generate electricity',
          option_c: 'Store physical objects',
          option_d: 'Connect electrical wires',
          correct_option: 'A',
          marks: 1,
          is_active: true
        },
        q10: {
          id: 'q10',
          question_text: 'Which unit is used to measure processor speed?',
          option_a: 'Byte',
          option_b: 'Hertz',
          option_c: 'Pixel',
          option_d: 'Volt',
          correct_option: 'B',
          marks: 1,
          is_active: true
        },
        q11: {
          id: 'q11',
          question_text: 'Which of the following is an example of an operating system?',
          option_a: 'Python',
          option_b: 'Windows',
          option_c: 'HTML',
          option_d: 'MySQL',
          correct_option: 'B',
          marks: 1,
          is_active: true
        },
        q12: {
          id: 'q12',
          question_text: 'Which device is used to permanently store data?',
          option_a: 'RAM',
          option_b: 'Cache',
          option_c: 'SSD',
          option_d: 'Register',
          correct_option: 'C',
          marks: 1,
          is_active: true
        },
        q13: {
          id: 'q13',
          question_text: 'Which technology creates a computer-generated immersive environment?',
          option_a: 'IoT',
          option_b: 'VR',
          option_c: 'Blockchain',
          option_d: 'Cloud Computing',
          correct_option: 'B',
          marks: 1,
          is_active: true
        },
        q14: {
          id: 'q14',
          question_text: 'Which protocol is commonly used to access web pages?',
          option_a: 'HTTP',
          option_b: 'FTP',
          option_c: 'SMTP',
          option_d: 'TCP',
          correct_option: 'A',
          marks: 1,
          is_active: true
        },
        q15: {
          id: 'q15',
          question_text: 'Which electronic component allows current to flow mainly in one direction?',
          option_a: 'Resistor',
          option_b: 'Capacitor',
          option_c: 'Diode',
          option_d: 'Inductor',
          correct_option: 'C',
          marks: 1,
          is_active: true
        },
        q16: {
          id: 'q16',
          question_text: 'What does HTML stand for?',
          option_a: 'HyperText Markup Language',
          option_b: 'HighText Machine Language',
          option_c: 'Hyper Transfer Machine Language',
          option_d: 'High Transfer Markup Language',
          correct_option: 'A',
          marks: 1,
          is_active: true
        },
        q17: {
          id: 'q17',
          question_text: 'What is the full form of GPS?',
          option_a: 'General Positioning System',
          option_b: 'Global Positioning System',
          option_c: 'Geographic Processing System',
          option_d: 'Global Processing Service',
          correct_option: 'B',
          marks: 1,
          is_active: true
        },
        q18: {
          id: 'q18',
          question_text: 'Which type of computer memory loses its data when power is switched off?',
          option_a: 'ROM',
          option_b: 'Hard Disk',
          option_c: 'RAM',
          option_d: 'SSD',
          correct_option: 'C',
          marks: 1,
          is_active: true
        },
        q19: {
          id: 'q19',
          question_text: 'Which technology is commonly used for contactless payments?',
          option_a: 'NFC',
          option_b: 'GPS',
          option_c: 'HDMI',
          option_d: 'USB',
          correct_option: 'A',
          marks: 1,
          is_active: true
        },
        q20: {
          id: 'q20',
          question_text: 'What does USB stand for?',
          option_a: 'Universal Serial Bus',
          option_b: 'United System Board',
          option_c: 'Universal Signal Base',
          option_d: 'United Serial Bus',
          correct_option: 'A',
          marks: 1,
          is_active: true
        },
        q21: {
          id: 'q21',
          question_text: 'Which lens is used to correct short-sightedness?',
          option_a: 'Convex lens',
          option_b: 'Concave lens',
          option_c: 'Cylindrical lens',
          option_d: 'Bifocal lens',
          correct_option: 'B',
          marks: 1,
          is_active: true
        },
        q22: {
          id: 'q22',
          question_text: 'Which type of wave requires a medium to travel?',
          option_a: 'Light wave',
          option_b: 'Radio wave',
          option_c: 'Sound wave',
          option_d: 'X-ray',
          correct_option: 'C',
          marks: 1,
          is_active: true
        },
        q23: {
          id: 'q23',
          question_text: 'Which type of bond is formed by sharing electrons between atoms?',
          option_a: 'Ionic bond',
          option_b: 'Covalent bond',
          option_c: 'Metallic bond',
          option_d: 'Hydrogen bond',
          correct_option: 'B',
          marks: 1,
          is_active: true
        },
        q24: {
          id: 'q24',
          question_text: 'If a metal is placed in a magnetic field and experiences a force, which principle is involved?',
          option_a: 'Lorentz force',
          option_b: 'Pascal\'s law',
          option_c: 'Archimedes\' principle',
          option_d: 'Bernoulli\'s principle',
          correct_option: 'A',
          marks: 1,
          is_active: true
        },
        q25: {
          id: 'q25',
          question_text: 'Which law states that pressure and volume of a gas are inversely proportional at constant temperature?',
          option_a: 'Charles\' Law',
          option_b: 'Boyle\'s Law',
          option_c: 'Avogadro\'s Law',
          option_d: 'Dalton\'s Law',
          correct_option: 'B',
          marks: 1,
          is_active: true
        },
        q26: {
          id: 'q26',
          question_text: 'Which OOP concept allows a child class to acquire properties and methods of a parent class?',
          option_a: 'Encapsulation',
          option_b: 'Inheritance',
          option_c: 'Polymorphism',
          option_d: 'Abstraction',
          correct_option: 'B',
          marks: 1,
          is_active: true
        },
        q27: {
          id: 'q27',
          question_text: 'Who is known as the Father of Computers?',
          option_a: 'Alan Turing',
          option_b: 'Charles Babbage',
          option_c: 'Bill Gates',
          option_d: 'Steve Jobs',
          correct_option: 'B',
          marks: 1,
          is_active: true
        },
        q28: {
          id: 'q28',
          question_text: 'Which country is known as the Land of the Rising Sun?',
          option_a: 'China',
          option_b: 'Japan',
          option_c: 'Thailand',
          option_d: 'South Korea',
          correct_option: 'B',
          marks: 1,
          is_active: true
        },
        q29: {
          id: 'q29',
          question_text: 'Which organization developed the Android operating system?',
          option_a: 'Microsoft',
          option_b: 'Google',
          option_c: 'Apple',
          option_d: 'IBM',
          correct_option: 'B',
          marks: 1,
          is_active: true
        },
        q30: {
          id: 'q30',
          question_text: 'Who was the first President of India?',
          option_a: 'Jawaharlal Nehru',
          option_b: 'Dr. Rajendra Prasad',
          option_c: 'S. Radhakrishnan',
          option_d: 'Dr. A. P. J. Abdul Kalam',
          correct_option: 'B',
          marks: 1,
          is_active: true
        }
      },
      room_2: {
        q1: {
          id: 'q1',
          question_text: 'For standard AM broadcasting, the modulation index should ideally be:',
          option_a: 'Between 0 and 1',
          option_b: 'Greater than 1',
          option_c: 'Equal to 0',
          option_d: 'Negative',
          correct_option: 'A',
          marks: 1,
          is_active: true
        },
        q2: {
          id: 'q2',
          question_text: 'Nyquist sampling rate for a signal bandwidth of 4 kHz is:',
          option_a: '2 kHz',
          option_b: '4 kHz',
          option_c: '8 kHz',
          option_d: '16 kHz',
          correct_option: 'C',
          marks: 1,
          is_active: true
        }
      }
    };
    await rtdb.ref('questions').set(questions);
    console.log('✔ Question bank populated.');

    console.log('\n🎉 Firebase Realtime Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed with error:', err);
    process.exit(1);
  }
}

seed();
