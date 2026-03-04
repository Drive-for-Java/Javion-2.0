module.exports = [

  // ===== Operating Systems =====
  {
    question: "Which scheduling algorithm may cause starvation?",
    options: ["Round Robin", "First Come First Serve", "Priority Scheduling"],
    answer: 2
  },
  {
    question: "Which system call creates a new process in Unix?",
    options: ["exec()", "fork()", "spawn()"],
    answer: 1
  },
  {
    question: "What does virtual memory primarily use?",
    options: ["RAM only", "Disk swapping", "GPU memory"],
    answer: 1
  },
  {
    question: "Which page replacement algorithm suffers from Belady’s anomaly?",
    options: ["LRU", "FIFO", "Optimal"],
    answer: 1
  },

  // ===== Networking =====
  {
    question: "Which OSI layer handles routing?",
    options: ["Transport Layer", "Network Layer", "Data Link Layer"],
    answer: 1
  },
  {
    question: "TCP is considered what type of protocol?",
    options: ["Connection-oriented", "Connectionless", "Stateless"],
    answer: 0
  },
  {
    question: "Which port does HTTPS use by default?",
    options: ["443", "80", "21"],
    answer: 0
  },
  {
    question: "What does DNS primarily translate?",
    options: ["IP to MAC", "Domain to IP", "IP to Domain"],
    answer: 1
  },

  // ===== Java Internals =====
  {
    question: "Which memory area stores class metadata in modern JVM?",
    options: ["Heap", "Stack", "Metaspace"],
    answer: 2
  },
  {
    question: "What triggers Garbage Collection in Java?",
    options: ["Manual delete", "JVM memory pressure", "System reboot"],
    answer: 1
  },
  {
    question: "Which keyword prevents method overriding?",
    options: ["static", "final", "const"],
    answer: 1
  },
  {
    question: "Which collection provides O(1) average lookup?",
    options: ["ArrayList", "HashMap", "LinkedList"],
    answer: 1
  },

  // ===== JavaScript Advanced =====
  {
    question: "What is the output type of typeof null?",
    options: ["null", "object", "undefined"],
    answer: 1
  },
  {
    question: "Which mechanism handles async in JS?",
    options: ["Thread Pool", "Event Loop", "Scheduler API"],
    answer: 1
  },
  {
    question: "Which method converts JSON string to object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.objectify()"],
    answer: 0
  },
  {
    question: "What does closure allow access to?",
    options: ["Global variables only", "Outer function scope", "DOM tree"],
    answer: 1
  },

  // ===== Databases =====
  {
    question: "Which normal form removes transitive dependency?",
    options: ["1NF", "2NF", "3NF"],
    answer: 2
  },
  {
    question: "ACID stands for?",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Accuracy, Consistency, Isolation, Data",
      "Atomicity, Control, Integrity, Durability"
    ],
    answer: 0
  },
  {
    question: "Which index structure is commonly used in databases?",
    options: ["B-Tree", "Binary Heap", "Graph"],
    answer: 0
  },

  // ===== Algorithms =====
  {
    question: "Time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)"],
    answer: 1
  },
  {
    question: "Worst-case time complexity of QuickSort?",
    options: ["O(n log n)", "O(n²)", "O(log n)"],
    answer: 1
  },
  {
    question: "Which data structure uses LIFO?",
    options: ["Queue", "Stack", "Heap"],
    answer: 1
  },
  {
    question: "Dijkstra’s algorithm cannot handle?",
    options: ["Positive weights", "Negative weights", "Cycles"],
    answer: 1
  },

  // ===== Security =====
  {
    question: "Which attack exploits unsanitized SQL queries?",
    options: ["XSS", "SQL Injection", "CSRF"],
    answer: 1
  },
  {
    question: "HTTPS encrypts data using?",
    options: ["SSL/TLS", "FTP", "SSH only"],
    answer: 0
  },
  {
    question: "Hashing is primarily used for?",
    options: ["Encryption", "Password storage", "Compression"],
    answer: 1
  },

  // ===== DevOps / Cloud =====
  {
    question: "Docker containers share?",
    options: ["Host OS Kernel", "Virtual Machine OS", "Hypervisor"],
    answer: 0
  },
  {
    question: "CI/CD stands for?",
    options: [
      "Continuous Integration / Continuous Deployment",
      "Code Integration / Code Deployment",
      "Continuous Input / Continuous Data"
    ],
    answer: 0
  },
  {
    question: "Which AWS service is object storage?",
    options: ["EC2", "S3", "RDS"],
    answer: 1
  },

  // ===== System Design =====
  {
    question: "Load balancers primarily improve?",
    options: ["Security", "Scalability", "Database indexing"],
    answer: 1
  },
  {
    question: "Horizontal scaling means?",
    options: ["Upgrade server specs", "Add more servers", "Increase RAM only"],
    answer: 1
  }

];