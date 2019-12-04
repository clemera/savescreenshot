/*
    Firefox addon "Save Screenshot"
    Copyright (C) 2019  Manuel Reimer <manuel.reimer@gmx.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// Central place for storage handling and preference defaults
const Storage = {
  _defaults: {
    "show_contextmenu": true,
    "savemethod": "open",
    "format": "png",
    "region": "full",
    "filenameformat": "",
    "jpegquality": 80
  },

  get: async function() {
    const prefs = await browser.storage.local.get();
    for (let name in this._defaults) {
      if (prefs[name] === undefined)
        prefs[name] = this._defaults[name];
    }
    return prefs;
  },

  set: async function(aObject) {
    return browser.storage.local.set(aObject);
  }
};
