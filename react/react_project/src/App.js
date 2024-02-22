import './App.css'
import { useEffect } from "react"
import { Col, Row, Layout, Spin } from 'antd'
import { connect } from "react-redux"
import { initializeApp } from "./redux/reducers/appReducer"
import { getInitialized } from "./redux/selectors"
import SidebarContainer from "./components/sidebar/SidebarContainer"
import ContentCustomContainer from "./components/content/ContentCustomContainer"
import HeaderCustomContainer from "./components/header/HeaderCustomContainer"

function App({ initialized, initializeApp }) {

    useEffect(() => {
        initializeApp()
    }, [initializeApp])

    return (
        <Layout style={ { background: "#EDEEF0", minHeight: '100%' } }>
            { !initialized
                ? <Spin size={ 'large' } fullscreen/>
                : <>
                    <HeaderCustomContainer/>
                    <div style={ { paddingLeft: 100, paddingRight: 200, paddingTop: 45, paddingBottom: 45 } }>
                        <Row>
                            <Col span={ 4 }>
                                <SidebarContainer/>
                            </Col>
                            <Col span={ 20 }>
                                <ContentCustomContainer/>
                            </Col>
                        </Row>
                    </div>
                </>

            }
        </Layout>
    )
}

const mapStateToProps = (state) => ({
    initialized: getInitialized(state)
})

export default connect(mapStateToProps, { initializeApp })(App)
