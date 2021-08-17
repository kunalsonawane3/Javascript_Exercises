def solve_hanoi(num_disk, from_peg, to_peg):
  peg =['A', 'B', 'C']
  spare_ind = 3 - peg.index(from_peg) - peg.index(to_peg)
  spare_peg = peg[spare_ind]

  if num_disk == 1:
    print(f"disk {num_disk} moved from {from_peg} to {to_peg}")
    return
  else:
    solve_hanoi(num_disk-1,from_peg,spare_peg)
    print(f"disk {num_disk} moved from {from_peg} to {to_peg}")
    solve_hanoi(num_disk-1,spare_peg,to_peg)

solve_hanoi(3,'A','B')
