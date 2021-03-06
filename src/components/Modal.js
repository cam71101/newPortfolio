import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import Button from "@material-ui/core/Button"
import Markdown from "markdown-to-jsx"
import CloseIcon from "@material-ui/icons/Close"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}))

export default function TransitionsModal({
  open,
  handleOpen,
  handleClose,
  img,
  title,
  text,
}) {
  const classes = useStyles()

  const cacheImages = async srcArray => {
    const promises = await srcArray.map(src => {
      return new Promise(function (resolve, reject) {
        const img = new Image()
        img.src = src.src
        img.onLoad = resolve()
        img.onError = reject()
      })
    })
    await Promise.all(promises)
  }

  cacheImages([img])

  return (
    <React.Fragment>
      <Button
        type="button"
        onClick={img => handleOpen(img)}
        className="btn center-btn sal-animate"
      >
        {title}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="modal-container">
            <CloseIcon className="close-icon" onClick={handleClose} />
            <div className="modal-text-container">
              <div className="modal-text">
                <h3>{title}</h3>
                <Markdown>{text}</Markdown>
              </div>
            </div>
            <Img fluid={img} className="project-page-code-img-one" />
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  )
}
