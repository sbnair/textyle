use super::{Tilegrid, utils};
use wasm_bindgen::prelude::*;

extern crate web_sys;

//macro_rules! log {
  //( $( $t:tt )* ) => {
    //web_sys::console::log_1(&format!( $( $t )* ).into());
  //}
//}

impl Tilegrid {
  fn get_index(&self, x: i32, y: i32) -> usize {
    (y * (self.width as i32) + x) as usize
  }

  pub fn get_all_tiles(&self) -> &[i32] {
    &self.tiles
  }

  pub fn set_tiles(&mut self, tiles: &[(i32, i32)], value: i32) {
    for (x, y) in tiles.iter().cloned() {
      let idx = self.get_index(x, y);
      self.tiles[idx] = value;
    }
  }

}

#[wasm_bindgen]
impl Tilegrid {
  pub fn new(width: u32, height: u32) -> Tilegrid {
    utils::set_panic_hook();

    let tiles = vec![-1; (width * height) as usize];

    Tilegrid {
      width: width,
      height: height,
      tiles: tiles,
    }
  }

  pub fn width(&self) -> u32 {
    self.width
  }

  pub fn height(&self) -> u32 {
    self.height
  }

  pub fn set(&mut self, x: i32, y: i32, value: i32) {
    let idx = self.get_index(x, y);
    // TODO: better handling of out of bounds
    if (idx as u32) >= self.width * self.height {
      return;
    }

    self.tiles[idx] = value;
  }

  pub fn get(&self, x: i32, y: i32) -> i32 {
    let idx = self.get_index(x, y);

    // TODO: better handling of out of bounds
    if (idx as u32) >= self.width * self.height {
      return -1;
    }

    self.tiles[idx]
  }
}