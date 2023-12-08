import React from 'react'
import styles from './TensorFlow.module.scss'
import './example.js'

export default function TensorFlow() {
    return (
        <div
            className="modal fade"
            id="myModal"
            tabIndex={-1}
            role="dialog"
            data-show="true"
            data-keyboard="false"
            data-backdrop="static"
        >
            <div className="modal-dialog modal-dialog-centered" style={{ minWidth: 550 }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Number recognition</h5>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className={`col-md-6 ml-auto ${styles.alignCenter}`}>
                                <div className={styles.alignCenter}>
                                    <div className="center-inside">
                                        <video
                                            autoPlay=""
                                            playsInline=""
                                            muted=""
                                            id="camera"
                                            width={224}
                                            height={224}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={`col-md-6 ml-auto ${styles.alignCenter}`}>
                                <div className={styles.alignCenter}>
                                    <div className="center-inside">
                                        <span
                                            className="badge badge-primary prediction-span"
                                            id="prediction"
                                        >
                                            0
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className={`col-md-6 ml-auto ${styles.alignCenter}`}>
                                <div className="center-inside">
                                    <button
                                        type="button"
                                        id={0}
                                        className="btn btn-outline-primary"
                                        onClick="handleButton(this)"
                                    >
                                        0
                                    </button>
                                    <button
                                        type="button"
                                        id={1}
                                        className="btn btn-outline-primary"
                                        onClick="handleButton(this)"
                                    >
                                        1
                                    </button>
                                    <button
                                        type="button"
                                        id={2}
                                        className="btn btn-outline-primary"
                                        onClick="handleButton(this)"
                                    >
                                        2
                                    </button>
                                    <button
                                        type="button"
                                        id={3}
                                        className="btn btn-outline-primary"
                                        onClick="handleButton(this)"
                                    >
                                        3
                                    </button>
                                    <button
                                        type="button"
                                        id={4}
                                        className="btn btn-outline-primary"
                                        onClick="handleButton(this)"
                                    >
                                        4
                                    </button>
                                </div>
                            </div>
                            <div className={`col-md-6 ml-auto ${styles.alignCenter}`}>
                                <div className="center-inside">
                                    <button
                                        type="button"
                                        id={5}
                                        className="btn btn-outline-primary"
                                        onClick="handleButton(this)"
                                    >
                                        5
                                    </button>
                                    <button
                                        type="button"
                                        id={6}
                                        className="btn btn-outline-primary"
                                        onClick="handleButton(this)"
                                    >
                                        6
                                    </button>
                                    <button
                                        type="button"
                                        id={7}
                                        className="btn btn-outline-primary"
                                        onClick="handleButton(this)"
                                    >
                                        7
                                    </button>
                                    <button
                                        type="button"
                                        id={8}
                                        className="btn btn-outline-primary"
                                        onClick="handleButton(this)"
                                    >
                                        8
                                    </button>
                                    <button
                                        type="button"
                                        id={9}
                                        className="btn btn-outline-primary"
                                        onClick="handleButton(this)"
                                    >
                                        9
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6 auto">
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        0
                                        <span
                                            id="samples_0"
                                            className="badge badge-primary badge-pill"
                                        />
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        1
                                        <span
                                            id="samples_1"
                                            className="badge badge-primary badge-pill"
                                        />
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        2
                                        <span
                                            id="samples_2"
                                            className="badge badge-primary badge-pill"
                                        />
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        3
                                        <span
                                            id="samples_3"
                                            className="badge badge-primary badge-pill"
                                        />
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        4
                                        <span
                                            id="samples_4"
                                            className="badge badge-primary badge-pill"
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 auto">
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        5
                                        <span
                                            id="samples_5"
                                            className="badge badge-primary badge-pill"
                                        />
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        6
                                        <span
                                            id="samples_6"
                                            className="badge badge-primary badge-pill"
                                        />
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        7
                                        <span
                                            id="samples_7"
                                            className="badge badge-primary badge-pill"
                                        />
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        8
                                        <span
                                            id="samples_8"
                                            className="badge badge-primary badge-pill"
                                        />
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        9
                                        <span
                                            id="samples_9"
                                            className="badge badge-primary badge-pill"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className={styles.alignCenter}>
                            <button
                                type="button"
                                style={{ width: 150 }}
                                className="btn btn-outline-primary"
                                id="train"
                                onClick="doTraining()"
                            >
                                Train
                            </button>
                            <button
                                type="button"
                                style={{ width: 150 }}
                                className="btn btn-outline-primary"
                                id="saveModel"
                                onClick="saveModel()"
                            >
                                Download
                            </button>
                        </div>
                        <div className={styles.alignCenter}>
                            <button
                                type="button"
                                style={{ width: 150 }}
                                className="btn btn-outline-warning"
                                id="startPredicting"
                                onClick="setPredicting(true)"
                            >
                                Start Predicting
                            </button>
                            <button
                                type="button"
                                style={{ width: 150 }}
                                className="btn btn-outline-warning"
                                id="stopPredicting"
                                onClick="setPredicting(false)"
                            >
                                Stop Predicting
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
