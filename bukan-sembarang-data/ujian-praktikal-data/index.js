// data array object literal
const employees = [
    {
        name: 'Fulan',
        email: 'fulan@dicoding.com',
        joinYear: 2020,
    },
];

console.log(employees)

// function yang siap menerima argument
function addEmployee(name,email,joinYear) {
    employees.push({name, email, joinYear})
};

addEmployee('Xza', 'Xza@gmail.com', 2007)

console.log(employees)

 /**
   * @TODO
   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
   */
