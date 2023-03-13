const print = console.log

function test() {
    let a = [100, 2, 3]
    a.forEach((x, index, arr) => {
        print(index + " " + x * 2, arr)
    })
    print(a)
    let obj = {
        name: "sandyblaze",
        age: 3000,
        title: "Demon King"
    }
    for (const key in obj) {
        print(key + " " + obj[key])
    }
    let big = Array(10 ** 6).fill(0)
    print(big.length)
    let n = big.length

    console.time('for')
    for (let i = 0; i < n; ++i) {
        big[i] = 2;
    }
    console.timeEnd('for')

    console.time('forEach')
    big.forEach((x, i) => {
        big[i] = 1;
    })
    console.timeEnd('forEach')

    console.time('for..in')
    for (let i in big) {
        big[i] = 3;
    }
    console.timeEnd('for..in')

    const my_object = {
        id: 1010,
        inc_id: function() {
            this.id++
        }
    }

    print(my_object)
    my_object.inc_id()
    print(my_object)
    my_object.inc_id()
    print(my_object)
    my_object.inc_id()
    print(my_object)
}

function emp() {
    let n = 100
    let employees = Array(n).fill(0)
    for (let i = 0; i < n; ++i) {
        employees[i] = {
            eid: `employ_id_${i + 1}`, 
            name: `employ_name_${i + 1}`,
            range: Math.floor(Math.random() * 6),
            salary: Math.floor(Math.random() * 100000),
            age: Math.floor(Math.random() * 30) + 20
        }
    }
    for (const [index, employee] of employees.entries()) {
        if (employee.range > 4) {
            print(index, `${employee.eid}, ${employee.name}, ${employee.range}`)
        }
    }
}

test()
