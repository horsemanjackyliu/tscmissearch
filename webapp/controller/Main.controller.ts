import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import formatter from "../model/formatter";
// import {} from "mobx";
/**
 * @namespace com.sap.cmissearch2.controller
 */
export default class Main extends BaseController {
	private formatter = formatter;

	public sayHello() : void {
		MessageBox.show("Hello World!");
	}

}
