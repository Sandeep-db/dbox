const LSON = {
    rmRec: function (lroot, map_, par) {
        map_.set(lroot, par)
        for (const [k, v] of Object.entries(lroot)) {
            if (typeof (v) == 'object' && v != null && v != undefined) {
                if (map_.has(v)) {
                    lroot[k] = 'ref.' + map_.get(v)
                } else {
                    this.rmRec(v, map_, par + '.' + k)
                }
            }
        }
    },
    removeLoop: function (lobj) {
        let map_ = new Map()
        map_[lobj] = 'root'
        this.rmRec(lobj, map_, 'root')
    },
    crRec: function (root, set_, groot) {
        if (set_.has(root)) {
            return
        }
        for (const [k, v] of Object.entries(root)) {
            if (typeof (v) == 'string' && v.startsWith('ref.')) {
                var par = groot
                const pars = v.split('.')
                for (let i = 2; i < pars.length; ++i) {
                    par = par[pars[i]]
                }
                root[k] = par
            } else {
                this.crRec(v, set_, groot)
            }
        }
    },
    createLoop: function (obj) {
        let set_ = new Set()
        this.crRec(obj, set_, obj)
    },
}

// main script

var lobj = {
    a: {
        b: 1,
        c: 2,
    },
    d: {
        e: 3
    }
}

lobj.a.d = lobj.a
lobj.d.f = lobj

console.log(lobj)

LSON.removeLoop(lobj)

console.log(lobj)

console.log('<------------------>')

var lobj = {
    a: {
        b: 1,
        c: 2,
    },
    d: {
        e: 3
    }
}

lobj.a.d = lobj.d
lobj.d.f = lobj.a

console.log(lobj)

LSON.removeLoop(lobj)

console.log(lobj)

LSON.createLoop(lobj)

console.log(lobj)
