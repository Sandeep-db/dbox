
var employees = []
const print = console.log

function add_employee(employee) {
    if (filter_employee('eid', employee.eid).length) {
        return false
    }
    employees.push(employee)
    return true
}

function filter_employee(key, val) {
    return employees.filter(employee => employee[key] == val)
}

function delete_employee(eid) {
    for (const [i, x] of employees.entries()) {
        if (x.eid === eid) {
            employees.splice(i, 1)
            return true
        }
    }
    return false
}

function update_employee(eid, obj) {
    for (const [i, x] of employees.entries()) {
        if (x.eid === eid) {
            employees[i] = {
                ...employees[i],
                ...obj
            }
            return true
        }
    }
    return false
}

function main() {
    print("Adding")
    let ranges = [0, 5, 3, 4, 2, 5]
    for (let i = 1; i < 6; ++i) {
        add_employee({
            eid: i, 
            name: `employ_name_${i}`,
            range: ranges[i],
            salary: Math.floor(Math.random() * 100000),
            age: Math.floor(Math.random() * 30) + 20
        })
    }
    print(employees)
    print("filter")
    print(filter_employee('range', 5))
    print("delete")
    delete_employee(3)
    print(employees)
    print("Update")
    update_employee(4, {'age': 60})
    print(employees)
}

main()
