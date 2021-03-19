import React, { useEffect, useState } from 'react'
import './StyleReport.scss'
import firebase from '../../ConfigFirabase'

export default function Report() {
    const [report, setreport] = useState(null)
    useEffect(() => {
        firebase.firestore().collection('report').onSnapshot((snap) => {
            setreport(snap.docs)//array chua co object
        });
    }, [])
    if (report !== null) {
        let arrayTakeInReport = []
        report.forEach((obj) => {
            let data = obj.data()
            arrayTakeInReport.push(data)
        })
        var Total = arrayTakeInReport.reduce((tichLuy, next) => next.subtotal + tichLuy, 0)
        var soldProduct = arrayTakeInReport.reduce((tichLuy, next) => next.soldProduct + tichLuy, 0)
        var totalCodeUsed = 0
        arrayTakeInReport.forEach((item) => {
            if (item.coupon !== 0) {
                totalCodeUsed++
            }
        })
    }

    return (
        <div style={{ marginTop: "52px" }}>
            <div className="container report">
                <div className="row">
                    <div className='col-3'>
                        <div className=' tag'>
                            <p>Total money</p>
                            <h5>${Total}</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className=' tag'>
                            <p>Total products sold</p>
                            <h5>{soldProduct}</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className=' tag'>
                            <p>Total discount</p>
                            <h5>$23</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className=' tag'>
                            <p>Total code used</p>
                            <h5>{totalCodeUsed}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
