import React from "react"
import { CatchError } from "../../core"

export const AdminConfigPreview = ({ entry }) => {
  const props = entry.getIn(["data"]).toJS()
  return (
    <CatchError>
      <h1>Configuration Values</h1>
      <div>
        <strong>Application Status:</strong>{" "}
        {props.application_status ? "Open" : "Closed"}
      </div>
      <div>
        <strong>Applications Closed Text:</strong> {props.app_closed_text}
      </div>
      <div>
        <strong>Applications Open Text:</strong> {props.app_open_text}
      </div>
      <hr />
    </CatchError>
  )
}
