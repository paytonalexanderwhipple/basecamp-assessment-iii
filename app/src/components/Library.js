import React ,{Component} from 'react'
import {Document, Page} from 'react-pdf'
import "./style.css"

class PDF extends Component {
  state = { numPages: null, pageNumber: 1, pdf:""}

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));

  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1}));

  pdfChangePH = () =>
    this.setState({pdf:"./images/players-handbook.pdf"})

  pdfChangeT1 = () =>
    this.setState({pdf:"./images/Temple-of-Elemental-Evil.pdf"})
  render() {
    const { pageNumber, numPages } = this.state

    return (
      <div>
        <nav>
          <button onClick={this.pdfChangePH}>PlayersHandsbook</button>
          <button onClick={this.pdfChangeT1}>T1-4</button>
        </nav>
        <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>
        <p>{this.state.pdf}</p>
        <div style={{width: 600}}>
          <Document file={this.state.pdf}
            onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    )
  }
}


export default PDF
