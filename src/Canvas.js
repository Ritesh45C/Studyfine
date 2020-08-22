import React from "react";
import { SketchField, Tools } from "react-sketch";
import { CompactPicker } from "react-color";

import { IconButton } from "@material-ui/core";
import Crop75Icon from "@material-ui/icons/Crop75";
import RemoveIcon from "@material-ui/icons/Remove";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import SaveIcon from "@material-ui/icons/Save";

export default class SketchExample extends React.Component {
  state = {
    tool: Tools.Pencil,
    canUndo: false,
    canRedo: false,
    lineColor: "Black",
    active: "",
  };
  _selectTool = (value, id) => {
    console.log("clicked");
    this.setState({
      tool: value,
      active: id,
      // [`fill${id}`]: `!this.state.fill${id}`,
      enableRemoveSelected: value === Tools.Select,
      enableCopyPaste: value === Tools.Select,
    });
  };
  _save = () => {
    // let drawings = this.state.drawings;
    // drawings.push(this._sketch.toDataURL());
    // this.setState({ drawings: drawings });
  };
  _undo = () => {
    this._sketch.undo();
    this.setState({
      canUndo: this._sketch.canUndo(),
      canRedo: this._sketch.canRedo(),
    });
  };

  _redo = () => {
    this._sketch.redo();
    this.setState({
      canUndo: this._sketch.canUndo(),
      canRedo: this._sketch.canRedo(),
    });
  };

  _clear = () => {
    this._sketch.clear();
    this._sketch.setBackgroundFromDataUrl("");
    this.setState({
      controlledValue: null,
      backgroundColor: "transparent",
      fillWithBackgroundColor: false,
      canUndo: this._sketch.canUndo(),
      canRedo: this._sketch.canRedo(),
    });
  };
  _onSketchChange = () => {
    let prev = this.state.canUndo;
    let now = this._sketch.canUndo();
    if (prev !== now) {
      this.setState({ canUndo: now });
    }
  };
  render() {
    return (
      <div>
        <div className="top">
          {!this.props.data ? ( // for teacher homework
            <div className="tool">
              <IconButton
                color="primary"
                disabled={!this.state.canUndo}
                onClick={this._undo}
              >
                <UndoIcon />
              </IconButton>
              <IconButton
                color="primary"
                disabled={!this.state.canRedo}
                onClick={this._redo}
              >
                <RedoIcon />
              </IconButton>
              <IconButton color="primary" onClick={this._save}>
                <SaveIcon />
              </IconButton>
            </div>
          ) : null}
          <CompactPicker
            id="lineColor"
            color={this.state.lineColor}
            onChange={(color) => this.setState({ lineColor: color.hex })}
          />
        </div>

        <form className={this.props.data ? "teacherTool" : "toll"}>
          <div className="buttonTools">
            <div className="cancel">
              <Crop75Icon
                className={this.state.active === "rec" ? "shapeactive" : null}
                // style={{ fill: this.state.fillrec ? "green" : null }}
                onClick={() => this._selectTool(Tools.Rectangle, "rec")}
                fontSize="large"
              />
              <RemoveIcon
                className={this.state.active === "line" ? "shapeactive" : null}
                // style={{ fill: this.state.fillline ? "green" : null }}
                onClick={() => this._selectTool(Tools.Line, "line")}
                fontSize="large"
              />
              <RadioButtonUncheckedIcon
                className={this.state.active === "cir" ? "shapeactive" : null}
                // style={{ fill: this.state.fillcir ? "green" : null }}
                onClick={() => this._selectTool(Tools.Circle, "cir")}
                fontSize="large"
              />
            </div>

            {/* <div
              className="cancel"
              value={Tools.Rectangle}
              onClick={() => this._selectTool(Tools.Rectangle)}
              key="Rectangle"
            >
              Rectangle
            </div>
            <div
              style={{ position: "relative", zIndex: "100000000 !important" }}
            >
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                value={this.state.tool}
                onChange={this._selectTool}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div> */}

            {/* <FormControl>
              <Select
                select={true}
                label="Canvas Tool"
                dropDownMenuProps={{
                  anchorOrigin: { vertical: "center", horizontal: "left" },
                }}
                value={this.state.tool}
                onChange={this._selectTool}
                helperText="Please select Canvas Tool"
              >
                <MenuItem value={Tools.Select} key="Select">
                  Select
                </MenuItem>
                <MenuItem value={Tools.Pencil} key="Pencil">
                  Pencil
                </MenuItem>
                <MenuItem value={Tools.Line} key="Line">
                  Line
                </MenuItem>
                <MenuItem value={Tools.Arrow} key="Arrow">
                  Arrow
                </MenuItem>
                <MenuItem value={Tools.Rectangle} key="Rectangle">
                  Rectangle
                </MenuItem>
                <MenuItem value={Tools.Circle} key="Circle">
                  Circle
                </MenuItem>
                <MenuItem value={Tools.Pan} key="Pan">
                  Pan
                </MenuItem>
              </Select>
            </FormControl> */}
          </div>
        </form>

        <div className="cancel">
          <SketchField
            width={this.props.width}
            lineColor={this.state.lineColor}
            height={this.props.height}
            tool={this.state.tool}
            defaultValue={this.props.data}
            onChange={this._onSketchChange}
            ref={(c) => (this._sketch = c)}
            lineWidth={3}
          />
        </div>
      </div>
    );
  }
}
