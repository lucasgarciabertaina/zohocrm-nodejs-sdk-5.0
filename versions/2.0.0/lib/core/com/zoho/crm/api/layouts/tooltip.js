import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Tooltip{

	name;
	value;
	keyModified = new Map();
	/**
	 * The method to get the name
	 * @returns {Choice} An instance of Choice
	 */
	getName()	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param {Choice} name An instance of Choice
	 */
	setName(name)	{
		if((name != null) && (!(name instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: Choice", null, null);
		}
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the value
	 * @returns {String} A String representing the value
	 */
	getValue()	{
		return this.value;

	}

	/**
	 * The method to set the value to value
	 * @param {String} value A String representing the value
	 */
	setValue(value)	{
		if((value != null) && (!(Object.prototype.toString.call(value) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: value EXPECTED TYPE: String", null, null);
		}
		this.value = value;
		this.keyModified.set("value", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param {String} key A String representing the key
	 * @returns {number} A number representing the modification
	 */
	isKeyModified(key)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param {String} key A String representing the key
	 * @param {number} modification A number representing the modification
	 */
	setKeyModified(key, modification)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: number", null, null);
		}
		this.keyModified.set(key, modification);

	}

}
export {
	Tooltip as MasterModel,
	Tooltip as Tooltip
}
