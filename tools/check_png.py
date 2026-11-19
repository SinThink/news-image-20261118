import struct, sys, hashlib, os
p = sys.argv[1]
d = open(p, 'rb').read()
assert d[:8] == b'\x89PNG\r\n\x1a\n', 'not a png'
w, h = struct.unpack('>II', d[16:24])
print(os.path.basename(p), 'bytes=%d dims=%dx%d size_ok=%s dims_ok=%s sha=%s' % (
    len(d), w, h, len(d) <= 1048576, w <= 1024 and h <= 1024,
    hashlib.sha256(d).hexdigest()))
