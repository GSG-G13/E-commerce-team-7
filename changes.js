<input type="range" id="points" name="points" min="0" max="500" onChange={(e) => setPrice(e.target.value)} />
          <select value={category} onChange={handleCategory}>
            <option value="0">All</option>
            <option value="5">Short by sweater</option>
            <option value="1">Short by shoes</option>
            <option value="2">Short by shirt</option>
            <option value="3">Short by jacket</option>
            <option value="4">Short by trousers</option>
          </select>
